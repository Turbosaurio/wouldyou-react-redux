import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import OptionButton from './OptionButton'

class UnasweredQuestions extends Component{

	questionOptionsButtons(obj, id){
		const
			one = obj.optionOne.text,
			two = obj.optionTwo.text
		return (
			<Fragment>
				<OptionButton action={() => this.changeOption(one)} label={one}/>
				<OptionButton action={() => this.changeOption(two)} label={two}/>
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
				{questions_arr
					.map((question, i) => {
						const q = questions[question]
						return(
							<li className="wrap-row" key={i}>
								<div className="wrap-row-name">{i + 1}.</div>
								{this.questionOptionsButtons(q)}
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