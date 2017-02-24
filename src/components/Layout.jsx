import React, { PropTypes } from 'react'
import Navigation from './Navigation'
import '../style/App.css'
import HomeState from '../containers/HomeState'

function Layout ({ children, openForm, formOpen, params, authenticated, ...props }) {
  return (
    <div>
      <Navigation openForm={openForm} params={params} authenticated={authenticated} />
      { React.cloneElement(children, { formOpen, authenticated, ...props }) }
    </div>
  )
}

export default HomeState(Layout)
