import {connect} from 'react-redux'
import React, {Component} from 'react'

class User extends Component {
	render(){
		const {id} = this.props
		return <div>{id}</div>
	}
}
function mapStateToProps({id}){
	return {
		id
	}
}
export default connect (mapStateToProps)(User)