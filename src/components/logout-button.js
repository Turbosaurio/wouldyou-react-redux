import React from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'

// HOW CHAMPS DO
function mapDispatchToProps(dispatch){
	return {
		logout: id => dispatch(setAuthedUser(id))
	}
}

function LogoutButton ({logout}){
	return(
		<button
			className="logout-button"
			onClick={() => logout('none')}
		>Logout</button>
	)
}

export default connect(null, mapDispatchToProps)(LogoutButton)


// OLD LAME WAY
// function LogoutButton (props){
// 	const handleSetAuthedUser = (id) =>{
// 		props.dispatch(setAuthedUser(id))
// 	}
// 	return(
// 		<button
// 			onClick={()=> {handleSetAuthedUser('none')}}
// 			className="logout-button"
// 		>Logout</button>
// 	)
// }
// export default connect()(LogoutButton)