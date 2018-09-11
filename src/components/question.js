import React, {Component} from 'react'
import {connect} from 'react-redux'

class Question extends Component{
	state = {
		current: 0,
	}
	nextQuestion(state){
		// todo next question
	}
	render(){
		const {questions} = this.props
		const questions_arr = Object.keys(questions)
		const currentQuestion = questions_arr[this.state.current]
		const {optionOne, optionTwo} = questions[currentQuestion]

		return(
			<div>
				<h2>Would you rather?</h2>
				<form>
					<input type="radio" name="one" value={optionOne.text}/> {optionOne.text}
					<input type="radio" name="two" value={optionTwo.text}/> {optionTwo.text}
				</form>
			</div>
		)
	}
}

const mapStateToProps = ({questions}) =>{
	return {
		questions,
	}
}
export default connect(mapStateToProps)(Question)