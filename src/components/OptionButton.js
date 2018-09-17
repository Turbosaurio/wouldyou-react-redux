import React from 'react'

function OptionButton (props){
	const {action, label} = props
	return(
		<button onClick={action} className="row">{label}</button>
	)
}

export default OptionButton