import React, { PropTypes } from 'react'
import Intro from './Intro'
import IntroForm from './IntroForm'

function Home ({ intros, formOpen, nextIntros }) {
  return (
    <div className="container">
      { formOpen && <IntroForm /> }
      {
        intros.map((intro, ix) => <Intro {...intro} key={intro._id} />)
      }
      <a className="f6 link dim ba ph3 pv2 mb2 dib near-black pointer" onClick={() => { nextIntros() }}>More Intros</a>
    </div>
  )
}

export default Home
