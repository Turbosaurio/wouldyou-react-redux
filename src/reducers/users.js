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
			let answers = {
				...state[authedUser].answers,
				[qid] : answer,
			}
			return{
				...state,
				...[authedUser],
				[authedUser] : { answers }
			}
		default:
			return state
	}
}