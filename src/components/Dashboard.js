import React from 'react'
import Container from './window-container'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import DashboardNav from './DashboardNav'
import AnsweredQuestions from './AnsweredQuestions'
import UnansweredQuestions from './UnansweredQuestions'
import QuestionsLeaderboard from './QuestionsLeaderboard'
import CreateQuestion from './CreateQuestion'

function Dashboard(props){
	return(
		<Container>
			<DashboardNav />
			<Route path="/answered-questions" component={AnsweredQuestions} />
			<Route path="/unanswered-questions"component={UnansweredQuestions} />
			<Route path="/questions-leaderboard" component={QuestionsLeaderboard} />
			<Route path="/create-question" component={CreateQuestion} />
		</Container>
	)
}

export default Dashboard

