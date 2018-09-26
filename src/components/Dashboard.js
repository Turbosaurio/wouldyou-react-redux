import React from 'react'
import Container from './window-container'


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import DashboardNav from './DashboardNav'
import AnsweredQuestions from './AnsweredQuestions'
import UnansweredQuestions from './UnansweredQuestions'
import CreateQuestion from './CreateQuestion'
import Leaderboard from './Leaderboard'
import QuestionDetails from './QuestionDetails'
import ErrorPage from './ErrorPage'

function Dashboard(props){
	return(
		<Router>
			<Container>
				<DashboardNav />
				<Switch>
					<Route path="/" exact component={UnansweredQuestions} />
					<Route path="/answered-questions"component={AnsweredQuestions} />
					<Route path="/leaderboard" component={Leaderboard} />
					<Route path="/add" component={CreateQuestion} />
					<Route path="/question/:id" component={QuestionDetails} />
					<Route component={ErrorPage} />
				</Switch>
			</Container>
		</Router>
	)
}

export default Dashboard

