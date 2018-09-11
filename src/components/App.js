import React, { Component } from 'react'
import {connect} from 'react-redux'

import {handleInitialData} from '../actions/shared'
import Question from './question.js'
import SelectUser from './SelectUser.js'

import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
    	<div>
	    	<LoadingBar />
    		{
          this.props.loading === true
    			? <div>No user</div>
    			: <SelectUser />
    		}
    	</div>
    )
  }
}
function mapStateToProps({authedUser}){
	return {
		loading: authedUser === null
	}
}

export default connect(mapStateToProps)(App)
