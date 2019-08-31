import React from 'react'
import { NavLink } from 'react-router-dom'

import { Container } from './styles'

function Navbar() {
    return (
        <Container>
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
