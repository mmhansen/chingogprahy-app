import React, { PropTypes } from 'react'
import Navigation from './Navigation'
import '../style/App.css'
import HomeState from '../containers/HomeState'

function Layout ({ children, openForm, formOpen }) {
  return (
    <div>
      <Navigation openForm={openForm} />
      { React.cloneElement(children, {formOpen}) }
    </div>
  )
}

export default HomeState(Layout)
