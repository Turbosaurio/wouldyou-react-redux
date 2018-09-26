import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import {handleAddUserAnswer} from '../actions/users'
import {handleAddQuestionVote} from '../actions/questions'
import {NavLink} from 'react-router-dom'

class UnasweredQuestions extends Component{

	saveQuestion(info){
		const {dispatch} = this.props
		dispatch(handleAddUserAnswer(info))
		dispatch(handleAddQuestionVote(info))
	}

	questionOptionsButtons(obj, authedUser, qid){
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
				<button className="option neutral" onClick={() => this.saveQuestion(answerInfo1)}>{one}</button>
				<button className="option neutral" onClick={() => this.saveQuestion(answerInfo2)}>{two}</button>
				<NavLink to={`/question/${qid}`} className="row details" title="view question details">...<span className="inner-text">View question details</span></NavLink>
			</Fragment>
		)
	}

	filterAnswers(arr1, arr2){
		let arr = arr1, newArr = arr2
		for(let a of arr){
			const i = arr2.indexOf(a)
			arr2.splice(i, 1)
		}
		return newArr
	}

	render(){
		const {
			authedUser,
			users,
			questions,
		} = this.props
		const user = users[authedUser]
		const answers_arr = Object.keys(user.answers)
		const all_questions = Object.keys(questions)
		const questions_arr = this.filterAnswers(answers_arr, all_questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)

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
											{this.questionOptionsButtons(q, authedUser, question)}
										</li>
									)
								})		
				}
				</ul>
			</div>
		)
	}
}
const mapStateToProps = ({authedUser, users, questions}) =>{
	return {
		authedUser,
		users,
		questions,
	}
}

export default connect(mapStateToProps)(UnasweredQuestions)