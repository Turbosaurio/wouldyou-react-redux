import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {formatDate, makePlural} from '../utils/_DATA'
import {NavLink, withRouter} from 'react-router-dom'
import ErrorPage from './ErrorPage'

function QuestionDetails (props){
	if(props.id === null){
		return (<ErrorPage/>)
	}
	const {authedUser, id, questions, users} = props
	const
		q = questions[id],
		u = users[q.author],
		currentUser = users[authedUser],
		oneVotes = q.optionOne.votes.length,
		twoVotes = q.optionTwo.votes.length,
		totalVotes = oneVotes + twoVotes
	
	return(
		<div className="questions-details">
			<h2>Would Tou Rather?</h2>
			<h3>Question creator</h3>
			<div className="row with-image">
				<img src={u.avatarURL} alt={`${u.name}'s avatar`}/>
				<div className="name">
					<div className="user-name">{`Question created by ${u.name}`}</div>
					<div>{`Created at ${formatDate(q.timestamp)}`}</div>
				</div>
			</div>
			<h3>User's options</h3>
				<div className="option-container">
					{
						currentUser.answers[id] !== 'optionOne' && currentUser.answers[id] !== 'optionTwo'
						?	<Fragment>
								<div className="option message">
									<h3>The user has not answered this question yet</h3>
									<div>{`Option one: ${q.optionOne.text}`}</div>
									<div>{`Option two: ${q.optionTwo.text}`}</div>
								</div>
							</Fragment>
						: 
							<Fragment>
								<div className={`option ${currentUser.answers[id] === 'optionOne' ? 'active' :  'inactive'}`}>
									<div className="option-name">{q.optionOne.text}</div>
									{
										currentUser.answers[id] === 'optionOne'
										? <Fragment>
											<div className="option-check"><span className="inner-text">User has this option selected</span></div>
											<div className="text"><b>Current user has this option selected</b></div>
										</Fragment>
										: null
									}
									<div className="text">{`With: ${oneVotes} ${makePlural(oneVotes, "vote")} and ${Math.round(oneVotes * 100 / totalVotes * 10) / 10}% of the total votes`}</div>
								</div>
								<div className={`option ${currentUser.answers[id] === 'optionTwo' ? 'active' :  'inactive'}`}>
									<div className="option-name">{q.optionTwo.text}</div>
									{
										currentUser.answers[id] === 'optionTwo'
										? <Fragment>
											<div className="option-check"><span className="inner-text">User has this option selected</span></div>
											<div className="text"><b>Current user has this option selected</b></div>
										</Fragment>
										: null
									}
									<div className="text">{`With: ${twoVotes} ${makePlural(twoVotes, "vote")} and ${Math.round(twoVotes * 100 / totalVotes * 10) / 10}% of the total votes`}</div>
								</div>

							</Fragment>
					}
					<NavLink to="/" className="go-back" title="Go back">Go back</NavLink>
				</div>
		</div>
	)			
}

function mapStateToProps({authedUser, questions, users}, props){
	const {id} = props.match.params
	return {
		authedUser,
		questions,
		users,
		id: questions[id] ? id :  null,
	}
}



export default withRouter(connect(mapStateToProps)(QuestionDetails))