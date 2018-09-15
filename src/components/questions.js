import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Button from './button'

import Container from './window-container'


class Questions extends Component{

	getOptions(obj, id){
		let updateQuestion = (id) =>{
			//// todo dispatch update question answer
		}
		return (
			<Fragment>
				<button disabled onClick={updateQuestion} className="row">{obj.optionOne.text}</button>
				<button disabled onClick={updateQuestion} className="row">{obj.optionTwo.text}</button>
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
		const questions_arr = Object.keys(questions)
		const answers_arr = Object.keys(user.answers)

		return(
			<Fragment>
				<div className="container-inner">
					<h2 className="container-header">Questions Already Answered</h2>
					<ul>
					{answers_arr.map((answers, i) =>{
						const q = questions[answers]
						return (
							<li className="wrap-row" key={i}>
								<div className="wrap-row-name">{i + 1}.</div>
								{this.getOptions(q)}
							</li>
						)
					})}
					</ul>
				</div>
				<div className="container-inner">
					<h2 className="container-header">Questions not yet answered</h2>
					<ul>
					{questions_arr
						.map((question, i) => {
							const q = questions[question]
							return(
								<li className="wrap-row" key={i}>
									<div className="wrap-row-name">{i + 1}.</div>
									{this.getOptions(q)}
								</li>
							)
						})
					}
					</ul>
				</div>
			</Fragment>
	
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
export default connect(mapStateToProps)(Questions)