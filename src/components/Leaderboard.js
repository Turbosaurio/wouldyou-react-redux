import React, {Fragment} from 'react'
import {connect} from 'react-redux'


import UserDetails from './UserDetails'
import QuestionsLeaderboard from './QuestionsLeaderboard'

function Leaderboard (props){
	const {users} = props

	const users_arr = Object.keys(users).sort((a, b) => {
		const answerA = Object.keys(users[a].answers).length
		const answerB = Object.keys(users[b].answers).length
		return answerA - answerB
	})

	return(
		<Fragment>
			<div class="container-inner">
				<h2 className="container-header">Users Leaderboard</h2>
				{users_arr.map( id => <UserDetails key={id} userId={id} />)}
			</div>
			<QuestionsLeaderboard />
		</Fragment>
	)
}

const mapStateToProps = ({ users }) => {
	return{ users }
}

export default connect(mapStateToProps)(Leaderboard)