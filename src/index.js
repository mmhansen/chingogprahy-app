import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import './style/index.css';

const store = createStore(rootReducer, {})

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);


// components = visiual <- function output
// based on a given state they will always have the same UI
// no logic in here

// containers = logic
// handle data fetching, application state(has something been clicked?)
