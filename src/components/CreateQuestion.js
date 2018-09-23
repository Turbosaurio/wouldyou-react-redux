import React, {Component, Fragment} from 'react'

import {connect} from 'react-redux'
import {
	//handleUpdateQuestion,
	handleAddNewQuestion
} from '../actions/questions'


class CreateQuestion extends Component{
	state = {
		optionOne: '',
		optionTwo: ''
	}

	handleChangeOne = (e) => {
		e.preventDefault()
		const text = e.target.value
		this.setState({optionOne: text})
	}

	handleChangeTwo = (e) => {
		e.preventDefault()
		const text = e.target.value
		this.setState({optionTwo: text})
	}

	submitQuestion(e){
		e.preventDefault()
		const {optionOne, optionTwo} = this.state
		const {dispatch, authedUser} = this.props
		const newQuestion = {
			optionOneText: optionOne,
			optionTwoText: optionTwo,
			author: authedUser
		}
		dispatch(handleAddNewQuestion(newQuestion))

	}

	render(){
		return(
			<div className="container-inner">
				<h2 className="container-header">Create a question</h2>
				<div className="wrap-row">
					<div className="option-container">
						<h3>Option One</h3>
						<textarea onChange={this.handleChangeOne}className=""/>
					</div>
					<div className="option-container">
						<h3>Option Two</h3>
						<textarea onChange={this.handleChangeTwo}className=""/>
					</div>
				</div>
				<div className="submit-container">
					{this.state.optionOne !== '' && this.state.optionTwo
						? <button type="submit" className="row submit" onClick={(e) => this.submitQuestion(e, )}>Submit new question</button>
						: <button  type="submit" className="row submit" disabled>Please type your options in both fields</button>
					}
				</div>
			</div>
		)
	}
}
const mapStateToProps = ({authedUser}) =>{
	return {
		authedUser
	}
}

export default connect(mapStateToProps)(CreateQuestion)