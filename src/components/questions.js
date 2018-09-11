import React, {Component} from 'react'
import {connect} from 'react-redux'

class Questions extends Component{
	render(){
		const {questions, users} = this.props
		const questions_arr = Object.keys(questions)
		return(
			<div>
				{questions_arr.map((question) => <div>{question}</div>)}
			</div>
		)
	}
}

function mapStateToProps({questions, users}){
	return {questions, users}
}

export default connect(mapStateToProps)(Questions)