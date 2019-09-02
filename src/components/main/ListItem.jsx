import React from 'react'

import { Button, Icon } from 'semantic-ui-react'

import { Li } from './styles'

function ListItem(props) {

    // url: {props.url}
    // youtubeId: {props.youtubeId} 
    // duration: {props.duration}
    // author: {props.author} 
    // createdAt: {props.createdAt}

    return (
        <Li key={props.id}>
            <section>
                {props.author} <span>{props.duration}</span>
            </section>
            <Button animated onClick={props.delete}>
                <Button.Content hidden>Delete</Button.Content>
                <Button.Content visible>
                    <Icon name='trash' />
                </Button.Content>
            </Button>
        </Li >
    )
}

export default ListItem
