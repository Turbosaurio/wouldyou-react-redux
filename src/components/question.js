import React, {Component} from 'react'
import {connect} from 'react-redux'

class Question extends Component{
	state = {
		current: 0,
	}
	
	render(){
		console.log(this.props)
		return(
			<div>
				<h2>Would you rather?</h2>
				<div>
					<span></span>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({users}) =>{
	const props = {
		users
	}
	return props
}
export default connect(mapStateToProps)(Question)