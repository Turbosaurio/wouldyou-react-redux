import React, {Component} from 'react'
import {connect} from 'react-redux'

class QuestionsLeaderboard extends Component{
	render(){
		const {
			questions
		} = this.props
		return(
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
							<li className="chart-box" key={question}>
								<div className="chart-name">{`Question ${i+1}: `}</div>						
								<div className='chart-container'>
									<div className="chart one" style={opt1}></div>
									<div className="chart two" style={opt2}></div>
								</div>
								<div className="chart-description">
									<div className="label one">{`${op1_votes} users rather: ${optionOne.text}`}</div>
									<div className="label two">{`${op2_votes} users rather: ${optionTwo.text}`}</div>
								</div>
							</li>
						)
					})}
				</ul>
			</div>	
		)
	}
}

const mapStateToProps = ({questions}) =>{
	return {
		questions,
	}
}
export default connect(mapStateToProps)(QuestionsLeaderboard)