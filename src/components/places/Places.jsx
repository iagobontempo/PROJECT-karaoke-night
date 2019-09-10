import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Container, Wrapper, QrCode } from './styles';
import { Input, Button, Dimmer, Loader, Divider, Icon, Header } from 'semantic-ui-react';
import firebase from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

function Places() {
    const [joinId, setJoinId] = useState('')
    const [user, initialising] = useAuthState(firebase.auth);
    const [toggle, setToggle] = useState(false)
    const [myPlaceToggle, setMyPlaceToggle] = useState(false)

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
        <Container>
            {user === null && <Redirect to='/login' />}
            <Wrapper>
                <div>
                    <h2>
                        Como usar
                    </h2>
                    <h4>
                        Usuarios
                    </h4>
                    <p>
                        Pegue o identificador e a senha do proprietário do karaoke e clique em conectar, logo apos será pedido a senha do karaoke.
                        Então você sera redirecionado e poderá enviar links do Youtube para entrar na lista!
                    </p>
                    <h5 onClick={() => setToggle(!toggle)}>
                        Você sera o responsavel pelo karaoke? Clique aqui!
                    </h5>
                    {toggle &&
                        <p>
                            Se sim, então você deve abrir esta URL no dispositivo conectado com sua TV/Projetor.
                            Para os usuarios poderem entrar em seu karaoke, você deve passar o seu identificador e a sua senha para conectar.
                    </p>
                    }

                </div>
                <Divider />
                <div>
                    <h2>
                        Conectar a um local
                        <Divider horizontal>
                            <Header as='h4' style={{ color: '#fff' }}>
                                <Icon name='qrcode' />
                                QR-Code
                            </Header>
                        </Divider>

                        <Input icon placeholder='QRCode'>
                            <Icon name='qrcode' />
                            <input type="file"
                                accept="image/*"
                                capture="environment"
                                tabIndex='-1' />
                        </Input>

                        <Divider horizontal>
                            <Header as='h4' style={{ color: '#fff' }}>
                                <Icon name='write' />
                                Identificador
                            </Header>
                        </Divider>

                        <form>
                            <Input style={{ width: '100%' }} placeholder='ID do local' name="joinId" onChange={e => setJoinId(e.target.value)} />
                            <Link to={`/${joinId}`}>
                                <Button attached='bottom' >Conectar</Button>
                            </Link>
                        </form>
                    </h2>
                </div>
                <Divider />
                <div>
                    <Button style={{ width: '100%' }} onClick={() => setMyPlaceToggle(!myPlaceToggle)}>Meu Local</Button>
                    {myPlaceToggle && (
                        <div>
                            <QrCode src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://karaoke-night.web.app/${user.uid}`} alt="QRCODE" />
                            Identificador: {user && user.uid} <br />
                            Senha para conexão: {user && user.displayName.replace(" ", "")}
                        </div>)
                    }
                </div>
            </Wrapper>
        </Container>
    )
}

export default Places
