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
            <NavLink to='/'>PLACES</NavLink>
            <NavLink to='/login'>LOGIN</NavLink>
            <NavLink to='/register'>REGISTER</NavLink>
            <NavLink to='/cafofo/'>PLACE</NavLink>
            <NavLink to='/cafofo/new'>NEW SONG</NavLink>
            <NavLink to='/cafofo/control'>CONTROL</NavLink>
            <NavLink to='/owner'>OWNER LOGIN</NavLink>
            <NavLink to='/cafofo/play'>PLAY</NavLink>
        </Container>
    )
}

export default Navbar
