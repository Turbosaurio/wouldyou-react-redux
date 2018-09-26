import React from 'react'
import {NavLink} from 'react-router-dom'

function DashboardNav (props){
	return(
		<nav className="dashboard-nav" aria-label="Dashboard Navigation">
			<NavLink to="/" exact>Missing Questions</NavLink>
			<NavLink to="/answered-questions" exact>User's Answers</NavLink>
			<NavLink to="/leaderboard">Leaderboard</NavLink>
			<NavLink to="/add">Create a Question</NavLink>
		</nav>
	)
}

export default DashboardNav