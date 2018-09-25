import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatDate, makePlural} from '../utils/_DATA'

class UserDetails extends Component {
	render(){
		const {authedUser, users, questions} = this.props
		const user = users[authedUser]
		const questions_arr = Object.keys(user.answers).sort((a,b) => questions[b].timestamp - questions[a].timestamp)

		const users_arr = Object.keys(users).sort((a, b) => {
			const answerA = Object.keys(users[a].answers).length
			const answerB = Object.keys(users[b].answers).length
			return answerB - answerA
		})

		let leaderboard = []

		for( let i = 0; i< users_arr.length; i++){

			if(users[users_arr[i + 1]]){
				const u_1 = users[users_arr[i]]
				const u_2 = users[users_arr[i+1]]

				const name_1 = Object.keys(u_1.answers).length
				const name_2 = Object.keys(u_2.answers).length

				const name = `${u_1.name} and ${u_2.name}`
				// const votes = Object.keys(u_1).length



				if(name_1 === name_2){
					leaderboard.push({name, votes: 3})
				}
				// if(Object.keys(u.answers).length === Object.keys(users[users_arr[0].answers]).length){
				// 	leaderboard.push({
				// 		name: Object.keys(users)[i] + "and" + Object.keys(users)[i + 1],
				// 		votes: Object.keys(users)[i].answers.length
				// 	})
				// }
			}
		}

		return(
			<div className="container-inner">
					<h3>{`The user has submitted ${user.questions.length} questions`}</h3>
					<ul>
					{
						user.questions
						.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
						.map((question) => {
							const q = questions[question]
							return(
								<li key={question} className="user-details">
									<div className="time">{`Submitted in: ${formatDate(q.timestamp)}`}</div>
									<div>
										<div className="description">{`Option 1: ${q.optionOne.text} with currenty ${q.optionOne.votes.length} ${makePlural(q.optionOne.votes.length, "vote")}`}</div>
										<div className="description">{`Option 2: ${q.optionTwo.text} with currenty ${q.optionTwo.votes.length} ${makePlural(q.optionTwo.votes.length, "vote")}`}</div>
									</div>
								</li>
							)
						})
					}
					</ul>
					<h3>{`The user has answered ${Object.keys(user.answers).length} questions`}</h3>
					<ul className="stripped-list">
						{
							questions_arr.map( answer => {
								const a = user.answers[answer]
								const q = questions[answer]
								let one, two
								if (a==='optionOne'){
									one = q.optionOne.text
									two = q.optionTwo.text
								} else {
									one = q.optionTwo.text
									two = q.optionOne.text
								}
								return (
									<li key={answer} className="user-datails">
										User rather
										<span className="text chosen"> {one} </span>
										than
										<span className="text"> {two}</span>
									</li>
								)
							})
						}
					</ul>
					<h3>Users leaderboard of questions answered</h3>
					<ol className="leader-board">
						{
							leaderboard
								.map( user => {
									return(
										<li key={user}>
											<span>{`${user.name} have ${user.votes} votes`}</span>
										</li>
									)
							})
						}
					</ol>
			</div>
		)
	}
}

const mapStateToProps = ({authedUser, users, questions}) => {
	return{
		authedUser,
		users,
		questions,
	}
}

export default connect(mapStateToProps)(UserDetails)