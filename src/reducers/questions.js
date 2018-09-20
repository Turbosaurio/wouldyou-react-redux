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
				[action.questions.qid]:{
					...state[action.questions.qid],
					optionOne:{
						...state[action.questions.qid].optionOne,
						votes: state[action.questions.qid].optionOne.votes.filter( vote => vote !== action.questions.authedUser)
					},
					optionTwo:{
						...state[action.questions.qid].optionTwo,
						votes: state[action.questions.qid].optionTwo.votes.filter( vote => vote !== action.questions.authedUser)
					}
				}
			}


		case ADD_QUESTION_VOTE:
			return{
				...state,
				[action.questions.qid]:{
					...state[action.questions.qid],
					[action.questions.answer]:{
						...state[action.questions.qid][action.questions.answer],
						votes: state[action.questions.qid][action.questions.answer].votes.concat(action.questions.authedUser)
					}
				}
			}
		default:
			return state
	}
}