import React from 'react'
import {connect} from 'react-redux'

function User (props){
	return <div>{props.id}</div>
}

function mapStateToProps({id}){
	return { id }
}
export default connect (mapStateToProps)(User)