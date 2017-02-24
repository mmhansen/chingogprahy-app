import React, { Component } from 'react';
import { Router, IndexRoute, browserHistory } from 'react-router'
// higher order components
import FetchIntros from '../containers/FetchIntros'
import FetchOne from '../containers/FetchOne'
import Authentication from '../containers/Authentication'
//
import Layout from './Layout'
import Home from './Home'
import OneIntro from './OneIntro'

function Routes () {
  return (
    <Router history={browserHistory}>
      <Router path='/' components={Authentication(Layout)}>
        <IndexRoute component={FetchIntros(Home)} />
        <Router path='/:introId' component={FetchOne(OneIntro)} />
      </Router>
    </Router>
  )
}

export default Routes
