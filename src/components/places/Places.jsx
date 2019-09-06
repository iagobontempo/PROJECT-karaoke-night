import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Container, Wrapper } from './styles';
import { Input, Button, Dimmer, Loader } from 'semantic-ui-react';
import firebase from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

function Places() {
    const [joinId, setJoinId] = useState('')
    const [user, initialising] = useAuthState(firebase.auth);

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
                    <p>
                        Aqui vem as informações de como usar o APP, como fazer mil e outras coisas e toda burocracia
                    </p>
                </div>
                <div>
                    <h2>
                        Conectar a um local
                        <form>
                            <Input placeholder='ID do local' name="joinId" onChange={e => setJoinId(e.target.value)} />
                            <Link to={`/${joinId}`}>
                                <Button>Conectar</Button>
                            </Link>
                        </form>
                    </h2>
                </div>
                <div>
                    <h2>Meu local</h2>
                    <p>
                        Identificador: {user.uid} <br />
                        Senha para conexão: diadorock
                    </p>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Places
