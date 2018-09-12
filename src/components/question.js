import React, {Component} from 'react'
import {connect} from 'react-redux'
import Button from './button'

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
		const questions_arr = Object.keys(questions)
		const {optionOne, optionTwo} = questions[questions_arr[this.state.current]]
		
		
		return(
			<div className="container">
				<h2>{`What does rather?`}</h2>
				<div className="wrap-row">
					<Button action={this.nextQuestion} label={optionOne.text} />
					<Button action={this.nextQuestion} label={optionTwo.text} />
				</div>
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