import React, { PropTypes, Component } from 'react'
import axios from 'axios'
import { url } from '../config'

const getIntros = (skip = 0) => {
  return axios.get(url+'/api/intro?skip='+skip)
}

export default function (ComposedComponent) {
  return class FetchIntroWrapper extends Component {
    constructor (props) {
      super(props)
      this.nextIntros = this.nextIntros.bind(this)
      this.state = {
        intros: [],
        skip: 0,
        count: 0
      }
    }
    componentWillMount () {
      getIntros()
        .then(res => {
          this.setState({
            intros: res.data.intros
          })
        })
        .catch(err => {
          console.log(err)
        })

      axios.get(url+'/api/intro/count')
        .then(res => {
          console.log(res)
          this.setState({
            count: res.data.count
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
    nextIntros () {
      this.setState({
        skip: this.state.skip += 10
      })
      getIntros(this.state.skip)
        .then(res => {
          this.setState({
            intros: [...this.state.intros, ...res.data.intros]
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
    render () {
      return <ComposedComponent {...this.state} {...this.props} nextIntros={this.nextIntros} />
    }
  }
}
