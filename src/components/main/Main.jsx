import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import moment from 'moment'
import firebase from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

import './title.css'

import ListItem from './ListItem';
import YoutubeForm from './YoutubeForm'

import { MainContainer, Wrapper, Blocker, QrCode, QrCodeDiv } from './styles'

import { Divider, Header, Icon, Button, Input, Dimmer, Loader } from 'semantic-ui-react'
import Play from './Play';

function Main(props) {
    const [user, initialising] = useAuthState(firebase.auth);
    const [pass, setPass] = useState('')
    const [place, setPlace] = useState({})

    const [firstVideoPlay, setFirstVideoPlay] = useState({ author: 'Ninguem' })
    const [next, setNext] = useState()
    const [playing, setPlaying] = useState(false);

    const [list, loading, error] = useCollection(
        firebase.db.collection('songs').orderBy('createdAt'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    useEffect(() => {
        var place = firebase.db.collection("users").doc(props.match.params.place);
        place.get().then(function (place) {
            if (place.exists) {
                setPlace(place.data())
            } else {
                alert('Local invalido')
                props.history.push('/')
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }, [props.match.params.place, props.history])

    function getVideoPlay() {
        let newList = []
        list.docs.map(doc => {
            if (doc.data().placeId === props.match.params.place) {
                let song = ({
                    id: doc.id,
                    youtubeId: doc.data().youtubeId,
                    duration: doc.data().duration,
                    author: doc.data().author
                })
                newList.push(song)
            }
        })
        if (playing === true && newList[0] === undefined) {
            alert('Não há proximos na fila')
        } else if (playing === true && newList[0] !== undefined) {
            setPlaying(false)
            setFirstVideoPlay(newList[0])
            deleteLink(newList[0].id)
            setTimeout(() => {
                setPlaying(true)
            }, 5000)
            if (newList[1] !== undefined) {
                setNext(newList[1].author)
            } else if (newList[1] === undefined) {
                setNext('Ninguem')
            }
        } else if (playing === false && newList[0] !== undefined) {
            setFirstVideoPlay(newList[0])
            deleteLink(newList[0].id)
            setTimeout(() => {
                setPlaying(true)
            }, 5000)
            if (newList[1] !== undefined) {
                setNext(newList[1].author)
            } else if (newList[1] === undefined) {
                setNext('Ninguem')
            }
        }
    }

    async function getDuration(youtubeId) {
        const api = `https://www.googleapis.com/youtube/v3/videos?id=${youtubeId}&part=contentDetails&key=AIzaSyD-2j6cQemL64AhbtI8CScPqqaxCsJNYNY`
        let response = await axios.get(api)
        let duration = response.data.items[0].contentDetails.duration
        return duration
    }

    function youtubeParser(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : false;
    }

    async function addLink(newKaraokeItem) {
        let youtubeId = youtubeParser(newKaraokeItem)
        let duration = await getDuration(youtubeId)
        let durationParse = moment.duration(duration).asMinutes();
        firebase.db.collection("songs").doc().set({
            url: newKaraokeItem,
            youtubeId: youtubeId,
            duration: durationParse,
            author: user.displayName,
            authorId: user.uid,
            createdAt: new Date().getTime(),
            placeId: props.match.params.place
        })
    }

    function deleteLink(id) {
        firebase.db.collection("songs").doc(id).delete()
    }

    if (initialising) {
        return (
            <div>
                <Dimmer active>
                    <Loader size='massive'>Loading</Loader>
                </Dimmer>
            </div>
        );
    }

    return (
        <MainContainer>
            {user === null && <Redirect to='/login' />}
            {pass === place.pass ? (
                <Wrapper>
                    {playing &&
                        <>
                            <Blocker>
                                <h1 style={{ marginTop: 10 }}>
                                    <span className="neon-orange">Karaoke</span>
                                    <span className="neon-blue">Night</span>
                                </h1>
                                <Button inverted color='teal' onClick={getVideoPlay} content={`Proximo: ${next ? next : 'Ninguem 😢'}`} icon='right arrow' labelPosition='right' />
                                <QrCodeDiv>
                                    <QrCode src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://karaoke-night.web.app/${props.match.params.place}`} alt="QRCODE" />
                                    <div>Entre</div>
                                    <div style={{ fontSize: 10, lineHeight: 1 }}><Icon name='unlock' size='small' />{place.pass}</div>
                                </QrCodeDiv>
                            </Blocker>
                        </>
                    }
                    {user !== null && user.uid === props.match.params.place &&
                        <Button onClick={getVideoPlay}>PROXIMO!</Button>
                    }
                    <Play id={firstVideoPlay.id}
                        youtubeId={firstVideoPlay.youtubeId}
                        duration={firstVideoPlay.duration}
                        playing={playing}
                        author={firstVideoPlay.author}
                        pass={place.pass}
                        place={props.match.params.place}
                    />
                    <ul>
                        {error && <strong>Error: {JSON.stringify(error)}</strong>}
                        {loading && <span>Collection: Loading...</span>}
                        {list && (
                            <span>
                                {list.docs.map(doc => (
                                    doc.data().placeId === props.match.params.place &&
                                    <ListItem key={doc.id}
                                        url={doc.data().url}
                                        youtubeId={doc.data().youtubeId}
                                        duration={doc.data().duration}
                                        author={doc.data().author}
                                        authorId={doc.data().authorId}
                                        placeOwner={props.match.params.place}
                                        createdAt={doc.data().createdAt}
                                        delete={() => deleteLink(doc.id)}
                                    />))}
                            </span>
                        )}
                    </ul>
                    <Divider horizontal>
                        <Header as='h4' style={{ color: '#fff' }}>
                            <Icon name='plus' />
                            Adicione sua musica
                    </Header>
                    </Divider>
                    <p>Você ira adicionar a musica com seus dados cadastrados</p>
                    <YoutubeForm addLink={addLink} />
                    <Divider section />
                    <p>Procurar video no youtube:</p>
                    <Button color='youtube' href='http://youtube.com' target="_blank">
                        <Icon name='youtube' /> YouTube
                </Button>
                </Wrapper>
            ) : (
                    <Wrapper style={{ alignItems: 'center', width: 350 }}>
                        <h1>SENHA DO LOCAL</h1>
                        <Input placeholder='Senha do local' onChange={e => setPass(e.target.value)}></Input>
                    </Wrapper>
                )}
        </MainContainer>
    )
}

export default Main
