import React from 'react'
import Container from './window-container'
import Questions from './Questions'
import CreateQuestion from './CreateQuestion'

function Dashboard(props){
	return(
		<Container>
			<Questions />
			<CreateQuestion />
		</Container>
	)
}

export default Dashboard