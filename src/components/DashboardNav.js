import React from 'react'
import {NavLink} from 'react-router-dom'

function DashboardNav (props){
	return(
		<nav className="dashboard-nav" aria-label="Dashboard Navigation">
			<NavLink to="/" exact>Unanswered questions</NavLink>
			<NavLink to="/answered-questions" exact>User's answers</NavLink>
			<NavLink to="/user-details">View User Details</NavLink>
			<NavLink to="/add">Create a question</NavLink>
		</nav>
	)
}

export default DashboardNav