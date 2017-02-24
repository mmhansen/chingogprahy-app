import React, { Component } from 'react'
import axios from 'axios'
import { url } from '../config'

export default function (ComposedComponent) {
  return class Authentication extends Component {
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
}
