import React, {Component} from 'react'
import {connect} from 'react-redux'

class SelectUser extends Component{
	render(){
		const {users} = this.props
		const users_arr = Object.keys(users)

		return(
			<div className="container">
				<h2>Select a user</h2>
				{
					users_arr.map((user) =>{
						const u = users[user]
						return(
							<div class="row">
								<img src={u.avatarURL} alt={`avatar from ${u.name}`}/>
								<div className="name">{u.name}</div>
							</div>
						)
					}
					)
				}
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