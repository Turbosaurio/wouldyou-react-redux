import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {formatDate} from '../utils/_DATA'
import {handleRemoveQuestionVote} from '../actions/questions'

class AnsweredQuestions extends Component{

	removeQuestion(info){
		const {dispatch} = this.props
		dispatch(handleRemoveQuestionVote(info))
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
							<div className="row active">{optionOne.text}</div>
							<div className="row inactive">{optionTwo.text}</div>
						</Fragment>
						: <Fragment>
							<div className="row inactive">{optionOne.text}</div>
							<div className="row active">{optionTwo.text}</div>
						</Fragment>
				}	
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
				<h2 className="container-header">Questions Already Answered</h2>
				<ul>
				{
					answers_arr.map((answer, i)=>{
						const q =questions[answer]
						return(
							<Fragment key={i}>
								<li className="wrap-row">
									<div className="question-details">{`Question created by ${users[q.author].name}, ${formatDate(q.timestamp)}`}</div>
									<div className="wrap-row-name">{i + 1}.</div>
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
	return{authedUser, users, questions}
}
export default connect(mapStateToProps)(AnsweredQuestions)