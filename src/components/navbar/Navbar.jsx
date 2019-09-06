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
            <h1>
                <span className="neon-orange-nav">Karaoke</span>
                <span className="neon-blue-nav">Night</span>
            </h1>

            {user === null ? (
                <>
                    <NavLink to='/login'><Button>Login</Button></NavLink>
                </>
            ) : (
                    <>
                        <NavLink to='/Dz1U7o0sBye4HWtaLqzOgpGcYcP2/'>MAIN</NavLink>
                        <Button onClick={handleLogout}>Logout</Button>
                    </>
                )}

        </Container>
    )
}

export default Navbar
