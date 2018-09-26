import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatDate, makePlural} from '../utils/_DATA'

class UserDetails extends Component{
	render(){
		
		const {userId, users, questions} = this.props
		const user = users[userId]
		const answers_arr = Object.keys(user.answers).sort((a,b) => questions[b].timestamp - questions[a].timestamp)

		return(
			<div className="container-inner details">
				<div className="row with-image">
					<img src={user.avatarURL} alt={`${user.name}'s avatar`} />
					<div className="name">{`${user.name} has submitted ${user.questions.length} ${makePlural(user.questions.length, 'question')} and answered ${Object.keys(user.answers).length} questions`}</div>
				</div>
				<div className="details-row">
					<details className="detail-item">
						<summary>{`View ${user.name}'s' questions`}</summary>
						<ol>
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
						</ol>
					</details>
					<details className="detail-item">
						<summary>{`View ${user.name}'s' answers`}</summary>
						<ol className="stripped-list">
							{
								answers_arr.map( answer => {
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
						</ol>
					</details>
				</div>
			</div>
		)
	}
}
function mapStateToProps({users, questions}){
	return {users, questions}
}
export default connect(mapStateToProps)(UserDetails)