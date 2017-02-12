import React, { PropTypes, Component } from 'react'
import axios from 'axios'
import { url } from '../config'

export default function(ComposedComponent) {
  return class FetchIntroWrapper extends Component {
    constructor(props) {
      super(props)
      this.state = {
        intros: []
      }
    }
    componentWillMount() {
      axios.get(url+'/api/intro')
        .then(res => {
          console.log(res)
          this.setState({
            intros: res.data.intros
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
    render() {
      return <ComposedComponent {...this.state} />
    }
  }
}
