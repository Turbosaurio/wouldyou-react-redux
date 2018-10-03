import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { handleAddNewQuestion } from '../actions/questions'


class CreateQuestion extends Component{
	constructor(){
		super()
		this.defaultState = {
			optionOne: '',
			optionTwo: '',
			toHome: false
		}
		this.state = this.defaultState
	}

	handleChange = e => {
		const { name, value} = e.target
		this.setState({
			[name]: value
		})
	}

	validate = () =>{
		const {optionOne, optionTwo} = this.state
		return optionOne.trim() !== '' && optionTwo.trim() !== ''
	}

	submitQuestion(e){
		e.preventDefault()
		const {
			optionOne: optionOneText, 
			optionTwo: optionTwoText,
		} = this.state
		const {dispatch, authedUser: author} = this.props

		dispatch( handleAddNewQuestion( {optionOneText, optionTwoText, author} ) )

		this.setState(() =>{
			return{
				...this.defaultState,
				toHome: true
			}
		})
	}

	render(){
		return(
			 this.state.toHome
			 	? <Redirect to="/" />
				:  <div className="container-inner">
						<h2 className="container-header">Create a question</h2>
						<div className="wrap-row">
							<div className="create-question-container">
								<h3>Option One</h3>
								<textarea name="optionOne" onChange={this.handleChange} placeholder="write optione one" className="" value={this.state.optionOne} />
							</div>
							<div className="create-question-container">
								<h3>Option Two</h3>
								<textarea name="optionTwo" onChange={this.handleChange} placeholder="write optione two" className="" value={this.state.optionTwo} />
							</div>
						</div>
						<div className="submit-container">
						{this.validate()
							? 
								<button
									type="submit"
									className="row submit"
									onClick={e => this.submitQuestion(e)}
								>Submit new question</button>
							: <div>Please fill both fieds</div>
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