import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Container, Wrapper } from './styles'
import { Input, Icon, Button, Divider } from 'semantic-ui-react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log(email, password)
    }

    return (
        <Container>
            <Wrapper>
                <h1>LOGIN</h1>
                <Icon inverted name='users' size='huge' />
                <form onSubmit={handleSubmit}>
                    <Input icon='at' iconPosition='left' placeholder='Email' type="email" required autoFocus
                        name='email' onChange={e => setEmail(e.target.value)} />
                    <Input icon='lock' iconPosition='left' placeholder='Senha' type="password" required
                        name='password' onChange={e => setPassword(e.target.value)} />
                    <Divider />
                    <Button fluid >LOGIN</Button>
                    <Link to='/register'>Ainda não possui cadastro?</Link>
                </form>
            </Wrapper>
        </Container>
    )
}

export default Login
