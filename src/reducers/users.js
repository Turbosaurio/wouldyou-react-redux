import {RECEIVE_USERS, SAVE_USER_ANSWER} from '../actions/users'

export default function users( state ={}, action){
	switch (action.type){
		case RECEIVE_USERS:
			return{
				...state,
				...action.users
			}
		case SAVE_USER_ANSWER:
			const {authedUser, qid, answer} = action
			state[authedUser].answers[qid] = answer
			return{
				...state,	
			}
		default:
			return state
	}
}