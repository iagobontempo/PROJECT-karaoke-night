import React, { useState, useEffect } from 'react'
import axios from 'axios';
import uuid from 'uuid'
import moment from 'moment'

import ListItem from './ListItem';
import YoutubeForm from './YoutubeForm'

import { MainContainer, Wrapper } from './styles'

import { Divider, Header, Icon, Button } from 'semantic-ui-react'
import Play from './Play';

function Main() {
    const [firstVideoPlay, setFirstVideoPlay] = useState({ id: 1, url: 'https://www.youtube.com/watch?v=668nUCeBHyY', youtubeId: '668nUCeBHyY', duration: '5', author: 'PRIMEIRO', createdAt: 5551548, authorId: 555984 })
    const [firstVideoCount, setFirstVideoCount] = useState(10)
    const [karaokeList, setKaraokeList] = useState([
        { id: 1, url: 'https://www.youtube.com/watch?v=668nUCeBHyY', youtubeId: '668nUCeBHyY', duration: '5', author: 'SEGUNDO', createdAt: 5551548, authorId: 555984 },
    ])

    const [loading, setLoading] = useState(0)
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        if (karaokeList.length > 1) {
            setTimeout(() => {
                setFirstVideoCount(firstVideoCount - 1);
            }, 1000)
            if (firstVideoCount === 1) {
                let kara = karaokeList[0]
                deleteLink(kara.id)
                var firstVideo = karaokeList[0]
                var firstVideoDur = firstVideo.duration
                setFirstVideoPlay(firstVideo)
                setFirstVideoCount(firstVideoDur)
            }
        } else {
            setFirstVideoCount(5)
            // startDelay()
        }
    }, [firstVideoCount, karaokeList, loading]);

    function startDelay() {
        setTimeout(() => {
            setLoading(loading + 1);
        }, 330)
        if (loading === 100) {
            setPlaying(true)
            setLoading(0)
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
        let durationParse = moment.duration(duration).asSeconds();
        setKaraokeList([...karaokeList, {
            id: uuid(),
            url: newKaraokeItem,
            youtubeId: youtubeId,
            duration: durationParse,
            author: 'Iago Bontempo',
            authorId: 1565548,
            createdAt: new Date().toLocaleString()
        }])
    }

    function deleteLink(id) {
        let filteredKaraokeList = karaokeList.filter(k => k.id !== id);
        setKaraokeList(filteredKaraokeList)
    }

    return (
        <MainContainer>
            <Wrapper>
                {/* <button onClick={getFirstList}></button> */}
                <Play id={firstVideoPlay.id}
                    youtubeId={firstVideoPlay.youtubeId}
                    duration={firstVideoPlay.duration}
                    loading={loading}
                    playing={playing}
                    author={firstVideoPlay.author}
                />
                <ul>
                    {karaokeList && karaokeList.map(l => (
                        <ListItem key={l.id}
                            url={l.url}
                            youtubeId={l.youtubeId}
                            duration={l.duration}
                            author={l.author}
                            createdAt={l.createdAt}
                            delete={() => deleteLink(l.id)}
                        />
                    ))}
                </ul>
                <Divider horizontal>
                    <Header as='h4'>
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
        </MainContainer>
    )
}

export default Main
