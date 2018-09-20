import {
	RECEIVE_QUESTIONS,
	REMOVE_QUESTION_VOTE,
	ADD_QUESTION_VOTE,
} from '../actions/questions'

export default function questions( state = {}, action){
	switch(action.type){
		case RECEIVE_QUESTIONS:
			return{
				...state,
				...action.questions,
			}
		case REMOVE_QUESTION_VOTE:
			//state[action.questions.qid][action.questions.answer].votes = state[action.questions.qid][action.questions.answer].votes.filter((user) => user !== action.questions.authedUser )
		
			console.log("kek", action.questions.authedUser)
			const {authedUser, qid, answer} = action.questions
			state[qid][answer].votes = state[qid][answer].votes.filter((ans) => ans === authedUser)
			return{
				...state,
			}
		case ADD_QUESTION_VOTE:
			state[action.questions.qid][action.questions.answer].votes = state[action.questions.qid][action.questions.answer].votes.concat(action.questions.authedUser)
			return{
				...state,
			}
		default:
			return state
	}
}