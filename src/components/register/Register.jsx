import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import firebase from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

import { Container, Wrapper } from './styles'
import { Input, Icon, Button, Divider } from 'semantic-ui-react'

function Register(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [user] = useAuthState(firebase.auth);

    const [error, setError] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        firebase.register(firstName, lastName, email, password).then(() => {
            props.history.push('/')
        }).catch((err) => {
            setError(err.message)
            console.log(err)
        })
    }

    return (
        <Container>
            {user !== null && <Redirect to='/' />}
            <Wrapper>
                <h1>REGISTRAR</h1>
                <Icon inverted name='users' size='huge' />
                <form onSubmit={handleSubmit}>
                    <Input placeholder='Primeiro nome' type="text" required autoFocus
                        name='firstName' onChange={e => setFirstName(e.target.value)} />
                    <Input placeholder='Sobrenome' type="text" required
                        name='lastName' onChange={e => setLastName(e.target.value)} />
                    <Input icon='at' iconPosition='left' placeholder='Email' type="email" required
                        name='email' onChange={e => setEmail(e.target.value)} />
                    <Input icon='lock' iconPosition='left' placeholder='Senha' type="password" required
                        name='password' onChange={e => setPassword(e.target.value)} />
                    <Divider />
                    {error && <div>{error}</div>}
                    <Button fluid >REGISTRAR</Button>
                    <Link to='/login'>Já tem cadastro?</Link>
                </form>
            </Wrapper>
        </Container>
    )
}

export default Register