import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Navbar } from 'react-bootstrap'
import '../style/Navigation.css'

function Navigation ({ openForm }) {
  return (
    <Navbar className="navigation tc">
      <Navbar.Header>
        <Navbar.Brand className="navigation-text">
          <Link to="/">Chingography</Link>
        </Navbar.Brand>
        <button className="fr" onClick={() => { openForm() }}>form</button>
      </Navbar.Header>
    </Navbar>
  )
}

export default Navigation
