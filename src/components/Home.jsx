import React from 'react'
import Intro from './Intro'
import IntroForm from './IntroForm'

function Home ({ intros, count, skip, formOpen, nextIntros }) {
  return (
    <div className="container">
      { formOpen && <IntroForm /> }
      {
        intros.map((intro, ix) => <Intro {...intro} key={intro._id} />)
      }
      <div className="tc">
        <a className="f4 link dim ba ph4 pv3 mb5 dib near-black pointer" onClick={() => { nextIntros() }}>More Intros</a>
      </div>
    </div>
  )
}

export default Home
