import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Wrapper } from './styles'
import { Input, Icon, Button, Divider } from 'semantic-ui-react'

function Login() {
    return (
        <Container>
            <Wrapper>
                <h1>LOGIN</h1>
                <Icon inverted name='users' size='huge' />
                <form>
                    <Input icon='at' iconPosition='left' placeholder='Email' type="email" required />
                    <Input icon='lock' iconPosition='left' placeholder='Password' type="password" required />
                    <Divider />
                    <Button fluid >LOGIN</Button>
                    <Link to='/register'>Ainda não possui cadastro?</Link>
                </form>
            </Wrapper>
        </Container>
    )
}

export default Login
