import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Container, Wrapper } from './styles';
import { Input, Button, Dimmer, Loader, Divider } from 'semantic-ui-react';
import firebase from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

function Places() {
    const [joinId, setJoinId] = useState('')
    const [user, initialising] = useAuthState(firebase.auth);
    const [toggle, setToggle] = useState(false)

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
                        <form>
                            <Input style={{ width: '100%' }} placeholder='ID do local' name="joinId" onChange={e => setJoinId(e.target.value)} />
                            <Link to={`/${joinId}`}>
                                <Button Button attached='bottom' >Conectar</Button>
                            </Link>
                        </form>
                    </h2>
                </div>
                <Divider />
                <div>
                    <h2>Meu local</h2>
                    <p>
                        Identificador: {user && user.uid} <br />
                        Senha para conexão: {user && user.displayName.replace(" ", "")}
                    </p>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Places
