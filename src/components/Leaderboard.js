import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'


import UserDetails from './UserDetails'

class Leaderboard extends Component {
	render(){
		const {users} = this.props

		const users_arr = Object.keys(users).sort((a, b) => {
			const answerA = Object.keys(users[a].answers).length
			const answerB = Object.keys(users[b].answers).length
			return answerA - answerB
		})

		return(
			<Fragment>{users_arr.map( id => <UserDetails key={id} userId={id} />)}</Fragment>
		)
	}
}

const mapStateToProps = ({ users }) => {
	return{ users }
}

export default connect(mapStateToProps)(Leaderboard)