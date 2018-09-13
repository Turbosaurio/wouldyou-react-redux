import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'

class LogoutButton extends Component{
	handleSetAuthedUser(id){
		const {dispatch} = this.props
		dispatch(setAuthedUser(id))
	}
	render(){
		return(
			<button
				onClick={()=> {this.handleSetAuthedUser('none')}}
				className="logout-button"
			>Logout</button>
		)
	}
}

export default connect()(LogoutButton)