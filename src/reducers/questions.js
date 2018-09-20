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
			return{
				...state,
			}
		case ADD_QUESTION_VOTE:
			const {authedUser, qid, answer} = action.questions
			state[qid][answer].votes = state[qid][answer].votes.concat(authedUser)
			return{
				...state,
			}
		default:
			return state
	}
}