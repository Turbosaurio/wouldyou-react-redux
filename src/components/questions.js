import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Button from './button'

import Container from './window-container'
import OptionButton from './OptionButton'
import {formatDate} from '../utils/_DATA'

class Questions extends Component{

	changeOption(text){
		//// todo dispatch update question answer
		console.log(text)
	}


	questionOptionsAnswered(obj, id){
		const
			one = obj.optionOne.text,
			two = obj.optionTwo.text
		return (
			<Fragment>
				<div className="row active">{one}</div>
				<div className="row inactive">{two}</div>
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
									{this.questionOptionsAnswered(q)}
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
							const kek = op1_votes * 100 / total + "%"
							const kak = op2_votes * 100 / total + "%"

							const style1 = {
								width: kek
							}
							const style2 = {
								width: kak
							}
							return(
								<li className="row">
									<div className='chart-container'>
										<div className="chart-name">{`Question ${i+1}: `}</div>						
										<div className="chart one" style={style1}></div>
										<div className="chart two" style={style2}></div>
										<div className="label one">10</div>
										<div className="label two">10</div>
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