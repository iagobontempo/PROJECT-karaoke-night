import React from 'react'
import useInputState from '../../hooks/useInputState'

import { Input, Button } from 'semantic-ui-react'
import { Form } from './styles'


function YoutubeForm(props) {
    const [ytLink, handleYtLinkChange, resetYtLink] = useInputState('')

    function handleClick(e) {
        e.preventDefault()
        props.addLink(ytLink)
        resetYtLink()
    }

    return (
        <Form>
            <Input required
                icon='youtube'
                iconPosition='left'
                value={ytLink}
                onChange={handleYtLinkChange}
                placeholder='http://youtube.com/'
            />
            <Button onClick={handleClick} primary >Adicionar</Button>
        </Form>
    )
}

export default YoutubeForm
