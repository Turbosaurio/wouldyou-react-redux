import React, {Component} from 'react'
import {connect} from 'react-redux'

class Questions extends Component{
	render(){
		const {questions} = this.props
		return(
			<div>
				{questions.map((question) => <div>{question}</div>)}
			</div>
		)
	}
}

function mapStateToProps({questions}){
	return {
		questions: Object.keys(questions)
	}
}

export default connect(mapStateToProps)(Questions)