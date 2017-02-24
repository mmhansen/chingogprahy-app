import React, { Component } from 'react'
import axios from 'axios'
import { url } from '../config'
import * as actions from '../actions/actionCreators'
import { connect } from 'react-redux'

export default function (ComposedComponent) {
  class IntroFormMethods extends Component {
    constructor (props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.state = {
        title: '',
        body: ''
      }
    }
    handleChange (event) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
    handleSubmit () {
      const intro = {
        ...this.state,
        author: this.props.user.username
      }
      axios.post(`${url}/api/intro`, intro, { withCredentials: true })
        .then((res) => {
          console.log(res)
          this.props.postMessage({
            type: 'success',
            body: res.data.body
          })
        })
        .catch((error) => {
          const messgage = Object.assign({}, error).response.data.body
          this.props.postMessage({
            type: 'error',
            body: messgage
          })
        })
    }
    render () {
      return <ComposedComponent {...this.state} {...this.props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    }
  }
  const mapState = (state) => {
    return {
      user: state.authentication.user
    }
  }
  return connect(mapState, actions)(IntroFormMethods)
}
