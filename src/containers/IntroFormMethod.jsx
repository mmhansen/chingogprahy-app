import React, { Component } from 'react'
import axios from 'axios'
import { url } from '../config'

export default function (ComposedComponent) {
  return class IntroFormMethods extends Component {
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
      console.log(this.state)
      console.log(this.props)
      axios.post(url+'/api/intro', this.state)
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    render () {
      return <ComposedComponent {...this.state} {...this.props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    }
  }
}
