import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import '../style/Intro.css'

function Intro ({ _id, title, body, author, cohort, created_at }) {
  return (
    <div className="introCard">
      <div className="header-bar">
        { author }
        <span className="dash">-</span>
        { cohort }
      </div>
      <Link to={'/' + _id} className="link-text">
        <div className="intro-body">
          <p className="b georgia">{ title }</p>
          <p>{ body }</p>
        </div>
      </Link>
    </div>
  )
}

export default Intro
