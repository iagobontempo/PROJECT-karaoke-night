import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Wrapper } from './styles'
import { Input, Icon, Button, Divider } from 'semantic-ui-react'

function Register() {
    return (
        <Container>
            <Wrapper>
                <h1>REGISTRAR</h1>
                <Icon inverted name='users' size='huge' />
                <form>
                    <Input placeholder='Primeiro nome' type="text" required />
                    <Input placeholder='Sobrenome' type="text" required />
                    <Input icon='at' iconPosition='left' placeholder='Email' type="email" required />
                    <Input icon='lock' iconPosition='left' placeholder='Senha' type="password" required />
                    <Divider />
                    <Button fluid >REGISTRAR</Button>
                    <Link to='/login'>Já tem cadastro?</Link>
                </form>
            </Wrapper>
        </Container>
    )
}

export default Register