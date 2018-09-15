import React, {Component} from 'react'

class CreateQuestion extends Component{
	render(){
		return(
			<div className="container-inner">
				<h2 className="container-header">Create a question</h2>
				<form className="wrap-row">
					<div className="option-container">
						<h3>Option One</h3>
						<textarea className=""/>
					</div>
					<div className="option-container">
						<h3>Option Two</h3>
						<textarea className=""/>
					</div>
					<button className="row submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default CreateQuestion