import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import OptionButton from './OptionButton'
import {handleAddUserAnswer} from '../actions/users'
import {handleAddQuestionVote} from '../actions/questions'

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
				<OptionButton action={() => this.saveQuestion(answerInfo1)} label={one}/>
				<OptionButton action={() => this.saveQuestion(answerInfo2)} label={two}/>
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
		const questions_arr = this.filterAnswers(answers_arr, all_questions)

		return(
			<div className="container-inner">
				<h2 className="container-header">Questions not yet answered</h2>
				<ul>

				{
					questions_arr.length === 0
						? <div className="">There are no more questions</div>
						: questions_arr
								.map((question, i) => {
									const q = questions[question]
									return(
										<li className="wrap-row" key={i}>
											<div className="wrap-row-name">{i + 1}.</div>
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