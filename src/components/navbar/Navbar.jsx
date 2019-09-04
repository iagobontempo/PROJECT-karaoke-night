import React from 'react'
import { NavLink } from 'react-router-dom'

import { Container } from './styles'

import './navTitle.css'

function Navbar() {
    return (
        <Container>
            <h1>
                <span className="neon-orange-nav">Karaoke</span>
                <span className="neon-blue-nav">Night</span>
            </h1>
            <NavLink to='/register'>REGISTER</NavLink>
            <NavLink to='/login'>LOGIN</NavLink>
            <NavLink to='/'>PLACES</NavLink>
            <NavLink to='/cafofo/'>MAIN</NavLink>
            <NavLink to='/cafofo/control'>CONTROL</NavLink>
        </Container>
    )
}

export default Navbar
