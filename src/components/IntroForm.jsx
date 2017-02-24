import React from 'react'
import IntroFormMethod from '../containers/IntroFormMethod'

function IntroForm ({ handleSubmit, handleChange, title, body, cohort }) {
  const cohorts = [
    'Lion',
    'Penguin'
  ]
  return (
    <div className="center pb5">
      <form className="pa4 black-80">
        <div className="">
          <label htmlFor="name" className="f6 b db mb2">Title <span className="normal black-60">(optional)</span></label>
          <input id="name" name="title" value={title} onChange={handleChange} className="input-reset br2 ba b--black-20 pa2 mb2 db w-100 reset-input" type="text" aria-describedby="name-desc" />
          <small id="name-desc" className="f6 black-60 db mb2">Keep it simple.</small>
       </div>
       <div className="pv3">
         <label htmlFor="comment" className="f6 b db mb2">Your Intro</label>
         <textarea id="comment" rows={7} name="body" value={body} onChange={handleChange} className="resize db border-box hover-black w-100 ba b--black-20 pa2 br2 mb2 reset-input" aria-describedby="comment-desc"></textarea>
         <small id="comment-desc" className="f6 black-60">Need help? Here's an example: <a href="#" className="link underline black-80 hover-blue">link to more info.</a></small>
       </div>
       <div className="pv3">
         <label htmlFor="comment" className="f6 b db mb2">Cohort</label>
         <select className='mb2 br2 reset-input' value={cohort} name='cohort' onChange={handleChange}>
           <option className='' value=''></option>
           {
             cohorts.map(x => <option key={x} value={x}>{x}</option>)
           }
        </select>
       </div>
       <a className="f6 link dim ba ph3 pv2 mb2 dib near-black pointer" onClick={() => { handleSubmit() }}>Submit</a>
      </form>

    </div>
  )
}

export default IntroFormMethod(IntroForm)
