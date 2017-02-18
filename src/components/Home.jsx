import React, { PropTypes } from 'react'
import Intro from './Intro'
import IntroForm from './IntroForm'

function Home ({ intros, formOpen }) {
  return (
    <div className="container">
      { formOpen && <IntroForm /> }
      {
        intros.map((intro, ix) => <Intro {...intro} key={intro._id} />)
      }
    </div>
  )
}

export default Home
