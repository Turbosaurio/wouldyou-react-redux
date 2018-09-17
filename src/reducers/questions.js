import {
	RECEIVE_QUESTIONS,
	SAVE_QUESTION
} from '../actions/questions'

export default function tweets( state = {}, action){
	switch(action.type){
		case RECEIVE_QUESTIONS:
			return{
				...state,
				...action.questions
			}
		case SAVE_QUESTION:
			const {question} = action
			let author = {}
			if (question.author !== null){
				author = {
					[question.author] :{
						...state[question.author],
						optionOne: state[question.author].author.concat([question.optionOne]),
						optionTwo: state[question.author].author.concat([question.optionTwo]),
					}
				}
			}
			return{
				...state,
				[action.question.id]: action.question,
				...author,
			}
		default:
			return state
	}
}