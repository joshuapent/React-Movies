import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar(props) {
  return (
    <nav>
        <Link to="/">Movies</Link> &nbsp; | &nbsp; {' '}
        <Link to="/actors">Actors</Link> &nbsp; | &nbsp; {' '}
        {props.user}
    </nav>
  )
}

export default NavBar