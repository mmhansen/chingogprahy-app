import React, { Component } from 'react';
import { Router, IndexRoute, browserHistory } from 'react-router'
//
import Layout from './Layout'
import Home from './Home'
import Intro from './Intro'

function Routes() {
  return (
    <Router history={browserHistory}>
      <Router path='/' components={Layout}>
        <IndexRoute component={Home} />
        <Router path='/:introId' component={Intro} />
      </Router>
    </Router>
  )
}

export default Routes
