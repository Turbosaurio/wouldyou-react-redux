import React, { Component } from 'react'
import {connect} from 'react-redux'

import {handleInitialData} from '../actions/shared'
import Question from './question.js'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
       <Question />
    )
  }
}

export default connect()(App)
