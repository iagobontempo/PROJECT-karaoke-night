import React from 'react'
import { Container } from './styles';

import { Icon } from 'semantic-ui-react'

function Footer() {
    return (
        <Container>
            Feito com <span role="img" aria-label="heart">💙</span> por &nbsp;<a href="http://iagobontempo.io" target="_blank" rel="noopener noreferrer">Iago Bontempo</a>&nbsp;
            <a href="https://github.com/iagobontempo">
                <Icon name='github' />
            </a>
            <a href="https://www.instagram.com/iagomad_/">
                <Icon name='instagram' />
            </a>
            <a href="https://www.linkedin.com/in/iagobontempo/">
                <Icon name='linkedin' />
            </a>

        </Container>
    )
}

export default Footer
