import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import LogoutButton from './logout-button'

function Topbar (props){
	const {authedUser, users} = props
	const {avatarURL} = users[authedUser]

	return(
		<div className="container-topbar">
			{
				authedUser !== "none"
					? <Fragment>
							<img src={avatarURL} alt={`${authedUser}'s avatar`} />
							<div className="topbar-user">{users[authedUser].name}</div>
							<LogoutButton />
						</Fragment>
					: null
			}
		</div>
	)
}
function mapStateToProps({authedUser, users}){
	return {authedUser, users}
}
export default connect(mapStateToProps)(Topbar)