import React, { Component } from 'react'

export default function (ComposedComponent) {
  return class HomeState extends Component {
    constructor (props) {
      super(props)
      this.openForm = this.openForm.bind(this)
      this.state = {
        formOpen: false
      }
    }
    openForm () {
      this.setState({
        formOpen: !this.state.formOpen
      })
    }
    render () {
      return <ComposedComponent {...this.state} {...this.props} openForm={this.openForm} />
    }
  }
}
