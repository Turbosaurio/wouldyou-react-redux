import React from 'react'
import Topbar from './topbar'

export default function Container (props){
	return(
		<div className="container">
			<Topbar />
			{props.children}
		</div>
	)
}