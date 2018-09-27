import React, {Fragment} from 'react'
import {connect} from 'react-redux'

import {handleAddUserAnswer} from '../actions/users'
import {handleAddQuestionVote} from '../actions/questions'
import {NavLink} from 'react-router-dom'

function UnasweredQuestions (props){

	const saveQuestion = (info) =>{
		const {dispatch} = props
		dispatch(handleAddUserAnswer(info))
		dispatch(handleAddQuestionVote(info))
	}

	const questionOptionsButtons = (obj, authedUser, qid) =>{
		const
			one = obj.optionOne.text,
			two = obj.optionTwo.text
		const answerInfo1 = {
			authedUser, qid, answer: 'optionOne',
		}
		const answerInfo2 = {
			authedUser, qid, answer: 'optionTwo',
		}
		return (
			<Fragment>
				<button className="option neutral" onClick={() => saveQuestion(answerInfo1)}>{one}</button>
				<button className="option neutral" onClick={() => saveQuestion(answerInfo2)}>{two}</button>
				<NavLink to={`/question/${qid}`} className="row details" title="view question details">...<span className="inner-text">View question details</span></NavLink>
			</Fragment>
		)
	}

	const {
		authedUser,
		users,
		questions,
	} = props
	const user = users[authedUser]
	const answers_arr = Object.keys(user.answers)
	const questions_arr = Object.keys(questions).filter(question => !answers_arr.includes(question))
	
	return(
		<div className="container-inner">
			<h2 className="container-header">Would you rather...?</h2>
			<ul>

			{
				questions_arr.length === 0
					? <div className="">All available questions have been answered.</div>
					: questions_arr	
							.map(question => {
								const q = questions[question]
								return(
									<li className="option-container" key={question}>
										{questionOptionsButtons(q, authedUser, question)}
									</li>
								)
							})		
			}
			</ul>
		</div>
	)
	
}
const mapStateToProps = ({authedUser, users, questions}) =>{
	return {
		authedUser,
		users,
		questions,
	}
}

export default connect(mapStateToProps)(UnasweredQuestions)