import React from 'react'
import Container from './window-container'


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import DashboardNav from './DashboardNav'
import AnsweredQuestions from './AnsweredQuestions'
import UnansweredQuestions from './UnansweredQuestions'
import QuestionsLeaderboard from './QuestionsLeaderboard'
import CreateQuestion from './CreateQuestion'
import UserDetails from './UserDetails'
import ErrorPage from './ErrorPage'

function Dashboard(props){
	return(
		<Router>
			<Container>
				<DashboardNav />
				<Switch>
					<Route path="/" exact component={AnsweredQuestions} />
					<Route path="/unanswered-questions"component={UnansweredQuestions} />
					<Route path="/user-details" component={UserDetails} />
					<Route path="/questions-leaderboard" component={QuestionsLeaderboard} />
					<Route path="/add" component={CreateQuestion} />
					<Route component={ErrorPage} />
				</Switch>
			</Container>
		</Router>
	)
}

export default Dashboard

