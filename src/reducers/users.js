import {RECEIVE_USERS, REMOVE_QUESTION} from '../actions/users'

export default function users( state ={}, action){
	switch (action.type){
		case RECEIVE_USERS:
			return{
				...state,
				...action.users
			}
		case REMOVE_QUESTION:
			return{
				...state,
				...action.users
			}
		default:
			return state
	}
}