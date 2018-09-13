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
		let {loading, authedUser} = this.props
		return (
			<div>
				<LoadingBar />
				{
					loading === true
					? <div className="system-message">Wait a moment</div>
					: <div>
							{
								authedUser !== 'none'
									? <Question />
									: <SelectUser />
							}	
						</div>
				}
			</div>
		)
	}
}
function mapStateToProps({authedUser}){
	return {
		authedUser,
		loading: authedUser === null
	}
}

export default connect(mapStateToProps)(App)
