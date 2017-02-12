import React, { PropTypes } from 'react'
import Intro from './Intro'

function Home({ intros }) {
  return (
    <div className="container">
      {
        intros.map((intro, ix) => <Intro {...intro} key={intro._id} />)
      }
    </div>
  )
}

export default Home
