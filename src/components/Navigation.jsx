import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Navbar } from 'react-bootstrap'
import '../style/Navigation.css'

function Navigation() {
  return (
    <Navbar className="navigation">
      <Navbar.Header>
        <Navbar.Brand className="navigation-text">
          <Link to="/">Chingography</Link>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  )
}

export default Navigation
