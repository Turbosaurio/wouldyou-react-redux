import React from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'

function SelectUser ({users, setAuthedUserAction}){
	return(
			<div className="container main">
				<h1 className="app-title">What would you rather?</h1>
				<div className="container-inner">
					<h2 className="container-header">Select a user</h2>
					<div className="wrap-row">
					{
						Object.keys(users).map((user) =>{
							const u = users[user]
							return(
								<button
									key={user}
									className="row with-image"
									onClick={() => setAuthedUserAction(u.id)}
								>
									<img src={u.avatarURL} alt={`${u.name}'s avatar`} />
									<p className="name">{u.name}</p>
								</button>
							)
						})
					}
					</div>
				</div>
			</div>
	)
}

function mapDispatchToProps(dispatch){
	return{
		setAuthedUserAction : function(id){
			dispatch(setAuthedUser(id))
		}
	}
}

function mapStateToProps ({users}){
	return{
		users
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectUser)