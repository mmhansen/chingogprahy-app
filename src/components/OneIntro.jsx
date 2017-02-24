import React from 'react'
import Intro from './Intro'

function OneIntro ({ intro }) {
  return (
    <div className="container">
      <Intro {...intro} />
    </div>
  )
}

export default OneIntro
