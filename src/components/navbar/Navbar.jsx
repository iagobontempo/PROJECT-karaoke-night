import React from 'react'
import { NavLink } from 'react-router-dom'
import firebase from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

import './navTitle.css'
import { Container } from './styles'
import { Button } from 'semantic-ui-react'


function Navbar(props) {
    const [user] = useAuthState(firebase.auth);

    function handleLogout(e) {
        e.preventDefault()
        firebase.logout()
    }

    return (
        <Container>
            <NavLink to='/login'>
                <span className="neon-orange-nav">Karaoke</span>
                <span className="neon-blue-nav">Night</span>
            </NavLink>

            {user === null ? (
                <>
                    <NavLink to='/login'><Button compact color='teal' inverted>Login</Button></NavLink>
                </>
            ) : (
                    <>
                        <Button onClick={handleLogout} color='teal' inverted>Logout</Button>
                    </>
                )}

        </Container>
    )
}

export default Navbar
