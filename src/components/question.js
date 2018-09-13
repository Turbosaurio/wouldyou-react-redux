import React, {Component} from 'react'
import {connect} from 'react-redux'
import Button from './button'
import LogoutButton from './logout-button'

class Question extends Component{
	state = {
		current: 0,
	}
	nextQuestion(){
		// todo next question
		let c = this.state.current
		c++
		this.setState({current: c})
	}
	render(){
		const {
			authedUser,
			users,
			questions,
		} = this.props

		const userQuestions = users[authedUser].questions
		
		return(
			<div className="container">
				<h2>{`${this.state.current + 1}. What does ${users[authedUser].name} rather?`}</h2>
					{
						userQuestions.map((question) =>{
							return(
								<div className="wrap-row" key={question}>
									<Button action={this.nextQuestion} label={questions[question].optionOne.text} />
									<Button action={this.nextQuestion} label={questions[question].optionTwo.text} />
								</div>
							)
						})
					}
					<LogoutButton />
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
export default connect(mapStateToProps)(Question)