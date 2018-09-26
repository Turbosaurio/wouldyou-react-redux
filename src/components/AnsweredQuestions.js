import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'


import {handleRemoveUserAnswer} from '../actions/users'
import {handleRemoveQuestionVote} from '../actions/questions'
import {NavLink} from 'react-router-dom'

class AnsweredQuestions extends Component{

	removeQuestion(info){
		const {dispatch} = this.props
		dispatch(handleRemoveQuestionVote(info))
		dispatch(handleRemoveUserAnswer(info))
	}

	questionOptionsAnswered(obj, opt, qid){
		const {optionOne, optionTwo} = obj
		const info = {
			authedUser: this.props.authedUser,
			qid,
			answer: opt
		}
		return (
			<Fragment>
				{
					opt === 'optionOne'
						? <Fragment>
							<div className="option active">
								{optionOne.text}
								<div className="option-check"><span className="inner-text">User has this option selected</span></div>
							</div>
							<div className="option inactive">{optionTwo.text}</div>
						</Fragment>
						: <Fragment>
							<div className="option inactive">{optionOne.text}</div>
							<div className="option active">
								{optionTwo.text}
								<div className="option-check"><span className="inner-text">User has this option selected</span></div>
							</div>
						</Fragment>
				}	
				<NavLink to={`/question/${qid}`} className="row details" title="view question details">...<span className="inner-text">View question details</span></NavLink>
				<button onClick={() => {this.removeQuestion(info)}} className="row delete" title="Delete this question">X</button>
			</Fragment>
		)
	}

	render(){
		const {
			authedUser,
			users,
			questions,
		} = this.props

		const user = users[authedUser]
		const answers_arr = Object.keys(user.answers)
		return(
			<div className="container-inner">
				<h2 className="container-header">User's answers</h2>
				<ul>
				{
					answers_arr.length === 0
					? <div className="">The user has no answered any question</div>
					: answers_arr
						.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
						.map(answer =>{
							const q =questions[answer]
							return(
								<Fragment key={answer}>
									<li className="wrap-row">
										{this.questionOptionsAnswered(q, user.answers[answer], answer)}
									</li>
								</Fragment>
							)
						})
				}
				</ul>
			</div>
		)
	}
}
const mapStateToProps = ({authedUser, users, questions}) =>{
	return{
		authedUser,
		users,
		questions
	}
}
export default connect(mapStateToProps)(AnsweredQuestions)