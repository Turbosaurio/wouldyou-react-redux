import React from 'react'
import {NavLink} from 'react-router-dom'

const links = [
	['/', 'Missing Questions'],
	['/answered-questions', 'User Answers'],
	['/leaderboard', 'Leaderboard'],
	['/add', 'Create a Question'],
]



function DashboardNav (){
	return(
		<nav className="dashboard-nav" aria-label="Dashboard Navigation">
		{
			links.map( (link, i) => 
				<NavLink
					key={link[0]}
					to={link[0]}
					exact={ i === 0 ? true : false}>
					{link[1]}
				</NavLink>
			)
		}
		</nav>
	)
}

export default DashboardNav