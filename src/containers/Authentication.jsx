import React, { Component } from 'react'
import axios from 'axios'
import { url } from '../config'
import * as actions from '../actions/actionCreators'
import { connect } from 'react-redux'

export default function (ComposedComponent) {
  class Authentication extends Component {
    constructor (props) {
      super(props)
      this.state = {
        authenticated: false,
        user: {}
      }
    }
    componentDidMount () {
      axios
        .get(`${url}/user`, { withCredentials: true })
        .then(res => {
          this.props.loginUser(res.data.user)
          this.setState({
            user: res.data.user,
            authenticated: true
          })
        })
        .catch(res => {
          console.log(res)
        })
    }
    render () {
      return <ComposedComponent {...this.props} {...this.state} />
    }
  }
  return connect(null, actions)(Authentication)
}
