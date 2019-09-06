import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import firebase from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

import { Container, Wrapper } from './styles'
import { Input, Icon, Button, Divider } from 'semantic-ui-react'

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [user] = useAuthState(firebase.auth);

    const [error, setError] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        firebase.login(email, password).then(() => {
            props.history.push('/')
        }).catch((err) => {
            setError(err.message)
        })
    }

    return (
        <Container>
            {user !== null && <Redirect to='/' />}
            <Wrapper>
                <h1>LOGIN</h1>
                <Icon inverted name='users' size='huge' />
                <form onSubmit={handleSubmit}>
                    <Input icon='at' iconPosition='left' placeholder='Email' type="email" required autoFocus
                        name='email' onChange={e => setEmail(e.target.value)} />
                    <Input icon='lock' iconPosition='left' placeholder='Senha' type="password" required
                        name='password' onChange={e => setPassword(e.target.value)} />
                    <Divider />
                    {error && <div>{error}</div>}
                    <Button fluid >LOGIN</Button>
                    <Link to='/register'>Ainda não possui cadastro?</Link>
                </form>
            </Wrapper>
        </Container>
    )
}

export default Login
