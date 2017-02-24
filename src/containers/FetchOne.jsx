import React, { Component } from 'react'
import { url } from '../config'
import axios from 'axios'

export default function(ComposedComponent) {
  return class FetchIntroWrapper extends Component {
    constructor(props) {
      super(props)
      this.state = {
        intro: {}
      }
    }
    componentWillMount() {
      const introId = this.props.params.introId
      axios.get(url+'/api/intro/'+introId)
        .then(res => {
          this.setState({
            intro: res.data.intro
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
    render() {
      return <ComposedComponent {...this.state} {...this.props} />
    }
  }
}
