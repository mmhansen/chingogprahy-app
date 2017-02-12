import React, { PropTypes, Component } from 'react'

export default function(ComposedComponent) {
  return class FetchIntroWrapper extends Component {
    constructor(props) {
      super(props)
      this.state = {
        intros: []
      }
    }
    componentWillMount() {
      // this is where we fetch
      const data = [
        {
          _id: '12345',
          body: 'Hello everyone! My name is Amédée I\'m 22 and I live in France. I started FCC two weeks ago and I really enjoy it. I already have a bachelor in computer science but going back to web dev is really fun! Funny thing I\'ll start my first job as a C#/.NET dev Tuesday (I\'m quite excited to be honest !). I\'m still doing the Front-End part of FCC (wiki viewer) but I want to finish it before 2017. My goal is the FullStack certification :slightly_smiling_face: I hope to meet all of you and have a good time coding together! Thank you',
          title: 'My story',
          cohort: 'Foxes',
          author: 'Amos',
          created_at: Date.now()
        }, {
          _id: '12346',
          body: 'Hello everyone! My name is Amédée I\'m 22 and I live in France. I started FCC two weeks ago and I really enjoy it. I already have a bachelor in computer science but going back to web dev is really fun! Funny thing I\'ll start my first job as a C#/.NET dev Tuesday (I\'m quite excited to be honest !). I\'m still doing the Front-End part of FCC (wiki viewer) but I want to finish it before 2017. My goal is the FullStack certification :slightly_smiling_face: I hope to meet all of you and have a good time coding together! Thank you',
          title: 'My story',
          cohort: 'Foxes',
          author: 'Amos',
          created_at: Date.now()
        },
      ]
      this.setState({
        intros: data
      })
    }
    render() {
      return <ComposedComponent {...this.state} />
    }
  }
}
