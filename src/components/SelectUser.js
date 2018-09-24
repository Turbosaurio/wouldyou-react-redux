import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
//import ButtonWithImage from './button-w-image'
// import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom'
// import Container from './window-container'

class SelectUser extends Component{

	handleSetAuthedUser(id){
		const {dispatch} = this.props
		dispatch(setAuthedUser(id))
	}

	render(){
		const {users} = this.props
		const users_arr = Object.keys(users)
		return(
				<div className="container main">
					<h1 className="app-title">What would you rather?</h1>
					<div className="container-inner">
						<h2 className="container-header">Select a user</h2>
						<div className="wrap-row">
						{
							users_arr.map((user, i) =>{
								const u = users[user]
								return(
									<button key={i} className="row with-image" onClick={() => {this.handleSetAuthedUser(u.id)}}>
										<img src={u.avatarURL} alt={`${u.name}'s avatar`} />
										<div className="name">{u.name}</div>
									</button>
								)
							})
						}
						</div>
					</div>
				</div>
		)
	}
}

function mapStateToProps ({users}){
	return{
		users
	}
}

export default connect(mapStateToProps)(SelectUser)