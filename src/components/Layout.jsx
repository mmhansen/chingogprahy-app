import React, { PropTypes } from 'react'
import Navigation from './Navigation'
import '../style/App.css'

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      { children }
    </div>
  )
}

export default Layout
