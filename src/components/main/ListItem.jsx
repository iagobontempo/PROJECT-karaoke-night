import React from 'react'
import firebase from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

import { Button, Icon } from 'semantic-ui-react'

import { Li } from './styles'

function ListItem(props) {
    const [user] = useAuthState(firebase.auth);

    return (
        <Li key={props.id}>
            <section>
                {props.author} <span>{props.duration}</span>
            </section>
            {user !== null && user.uid === props.authorId &&
                < Button animated onClick={props.delete}>
                    <Button.Content hidden>Delete</Button.Content>
                    <Button.Content visible>
                        <Icon name='trash' />
                    </Button.Content>
                </Button>
            }
        </Li >
    )
}

export default ListItem
