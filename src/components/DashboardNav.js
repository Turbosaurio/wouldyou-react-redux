import React from 'react'
import {NavLink} from 'react-router-dom'

function DashboardNav (props){
	return(
		<nav className="dashboard-nav" aria-label="Dashboard Navigation">
			<NavLink to="/answered-questions">Answered questions</NavLink>
			<NavLink to="/unanswered-questions">Questions not answered</NavLink>
			<NavLink to="/questions-leaderboard">Questions leaderboard</NavLink>
			<NavLink to="/create-question">Create a question</NavLink>
			<NavLink to="/user-details">View User Details</NavLink>
		</nav>
	)
}

export default DashboardNav