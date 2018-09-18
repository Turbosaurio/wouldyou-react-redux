import React from 'react'

function DashboardNav (props){
	return(
		<nav className="dashboard-nav" aria-label="Dashboard Navigation">
			<a href="/" className="current">Answered questions</a>
			<a href="/">Questions not answered</a>
			<a href="/">Questions leaderboard</a>
			<a href="/">Create a question</a>
		</nav>
	)
}

export default DashboardNav