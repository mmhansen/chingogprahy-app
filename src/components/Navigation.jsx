import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Navbar } from 'react-bootstrap'
import '../style/Navigation.css'

function Navigation ({ openForm, params }) {
  return (
    <Navbar className="navigation tc">
      <Navbar.Header>
        <Navbar.Brand className="navigation-text">
          <Link to="/">Chingography</Link>
        </Navbar.Brand>
      </Navbar.Header>
      { !params.introId && <a className="f6 link dim ba ph3 pv2 mb2 dib near-black pointer" onClick={() => { openForm() }}>Tell your story...</a> }
    </Navbar>
  )
}

export default Navigation
