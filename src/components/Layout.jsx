import React, { PropTypes } from 'react'
import Navigation from './Navigation'

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      { children }
    </div>
  )
}

export default Layout
