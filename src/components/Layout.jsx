import React, { PropTypes } from 'react'
import Navigation from './Navigation'
import '../style/App.css'
import HomeState from '../containers/HomeState'

function Layout ({ children, openForm, formOpen, params }) {
  return (
    <div>
      <Navigation openForm={openForm} params={params} />
      { React.cloneElement(children, {formOpen}) }
    </div>
  )
}

export default HomeState(Layout)
