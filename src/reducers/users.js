import {
	RECEIVE_USERS,
	ADD_USER_ANSWER,
	REMOVE_USER_ANSWER,
	ADD_USER_QUESTION,
} from '../actions/users'

export default function users( state ={}, action){
	switch (action.type){
		case RECEIVE_USERS:
			return{
				...state,
				...action.users
			}
		case ADD_USER_ANSWER:
			return{
				...state,
				[action.authedUser]:{
					...state[action.authedUser],
					answers:{
						...state[action.authedUser].answers,
						[action.qid] : action.answer
					}
				}				
			}
		case REMOVE_USER_ANSWER:
			const { [action.qid] : _ , ...answers} = state[action.authedUser].answers
			return{
				...state,
				[action.authedUser]:{
					...state[action.authedUser],
					answers,
				}
			}
			case ADD_USER_QUESTION:
				let kek = {
					...state,
					[action.author] : {
						...state[action.author],
						questions: {
							...state[action.author].questions.concat(action.question)

						}
					}
				}
				return{
					...state
				}
		default:
			return state
	}
}