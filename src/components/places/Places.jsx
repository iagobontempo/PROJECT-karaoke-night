import React from 'react'
import { Container, Wrapper } from './styles';
import { Input, Button } from 'semantic-ui-react';

function Places() {
    return (
        <Container>
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
                            <Input placeholder='ID do local' />
                            <Input placeholder='Senha do local' />
                            <Button>Conectar</Button>
                        </form>
                    </h2>
                </div>
                <div>
                    <h2>Meu local</h2>
                    <p>
                        Identificador: X4548s51q258-84a115 <br />
                        Senha para conexão: diadorock
                    </p>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Places
