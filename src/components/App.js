import React, { Component } from 'react'
import {connect} from 'react-redux'


import LoadingBar from 'react-redux-loading'

import {handleInitialData} from '../actions/shared'
import SelectUser from './SelectUser'
import Dashboard from './Dashboard'



class App extends Component {
	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}
	render() {
		const {loading, authedUser} = this.props
		return (
			<div>
				<LoadingBar />
				{
					loading === true
					? <div className="system-message">Wait a moment</div>
					: <div>
							{
								authedUser === 'none'
									? <SelectUser/>
									: <Dashboard/>
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
