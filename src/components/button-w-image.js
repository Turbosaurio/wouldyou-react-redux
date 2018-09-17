import React from 'react'

export default function ButtonWithImage (props){
	const {imageUrl, action, label} = props
	return(
		<button className="row with-image" onClick={action}>
			<img src={imageUrl} alt={`${label}'s avatar`} />
			<div className="name">{label}</div>
		</button>
	)
}