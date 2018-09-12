import React from 'react'

export default function Button (props){
	const {action, label} = props
	return(
		<button className="row" onClick={action}>
			<div className="name">{label}</div>
		</button>
	)
}