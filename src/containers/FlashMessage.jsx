import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function (ComposedComponent) {
  class FlashMessage extends Component {
    render () {
      const type = (this.props.message.type === 'error') ? 'red' : 'green'
      return (
        <div>
          {this.props.message.body && <p className={`bg-${type} pa3 pr6 white f3 absolute top-2 right-0`}>{this.props.message.body}</p>}
          <ComposedComponent {...this.props} {...this.state} />
        </div>
      )
    }
  }
  const mapState = (state) => {
    return {
      message: state.message.message
    }
  }
  return connect(mapState, null)(FlashMessage)
}
