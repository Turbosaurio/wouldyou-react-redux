import React from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'

function LogoutButton (props){
	const handleSetAuthedUser = (id) =>{
		props.dispatch(setAuthedUser(id))
	}
	return(
		<button
			onClick={()=> {handleSetAuthedUser('none')}}
			className="logout-button"
		>Logout</button>
	)
}

export default connect()(LogoutButton)