import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Button from './button'

import Container from './window-container'
import OptionButton from './OptionButton'
import {formatDate} from '../utils/_DATA'
import DashboardNav from './DashboardNav'

class Questions extends Component{

	changeOption(text){
		//// todo dispatch update question answer
		console.log(text)
	}


	questionOptionsAnswered(obj, opt){
		const {optionOne, optionTwo} = obj
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
				<button className="row delete" title="Delete this question">X</button>
			</Fragment>
		)
	}

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
			<Fragment>
				<DashboardNav />
				<div className="container-inner">
					<h2 className="container-header">Questions Already Answered</h2>
					<ul>
					{answers_arr.map((answers, i) =>{
						const q = questions[answers]
						return (
							<Fragment key={i}>
								<li className="wrap-row">
									<div className="question-details">{`Question created by ${users[q.author].name}, ${formatDate(q.timestamp)}`}</div>
									<div className="wrap-row-name">{i + 1}.</div>
									{this.questionOptionsAnswered(q, user.answers[answers])}
								</li>
							</Fragment>
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
									{this.questionOptionsButtons(q)}
								</li>
							)
						})
					}
					</ul>
				</div>
				<div className="container-inner">
					<h2 className="container-header">Questions leaderboard</h2>
					<ul>
						{Object.keys(questions).map((question, i) => {
							const q = questions[question]
							const {optionOne, optionTwo} = q

							const op1_votes = optionOne.votes.length
							const op2_votes = optionTwo.votes.length
							const total = op1_votes + op2_votes
							const tot1 = op1_votes * 100 / total + "%"
							const tot2 = op2_votes * 100 / total + "%"

							const opt1 = {
								width: tot1
							}
							const opt2 = {
								width: tot2
							}
							return(
								<li className="chart-box">
									<div className="chart-name">{`Question ${i+1}: `}</div>						
									<div className='chart-container'>
										<div className="chart one" style={opt1}></div>
										<div className="chart two" style={opt2}></div>
									</div>
									<div className="chart-description">
										<div className="label one">{op1_votes}</div>
										<div className="label two">{op2_votes}</div>
									</div>
								</li>
							)
						})}
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