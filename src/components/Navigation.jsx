import React from 'react'
import { Link } from 'react-router'
import { Navbar } from 'react-bootstrap'
import '../style/Navigation.css'
import { url } from '../config'

function Navigation ({ openForm, params, authenticated }) {
  // display only when auth, but not when params.introId is present
  // 'you just have to think' - mo 2017
  return (
    <Navbar className="navigation tc">
      <Navbar.Header>
        <Navbar.Brand className="navigation-text">
          <Link to="/">Chingography</Link>
        </Navbar.Brand>
      </Navbar.Header>
      { (authenticated && !params.introId) && <a className="f6 link dim ba ph3 pv2 mb2 dib near-black pointer" onClick={() => { openForm() }}>Tell your story...</a> }
      { !authenticated && <a className="f6 link dim ba ph3 pv2 mb2 dib near-black pointer" href={`${url}/login/github`}>Github Login</a> }
    </Navbar>
  )
}

export default Navigation
