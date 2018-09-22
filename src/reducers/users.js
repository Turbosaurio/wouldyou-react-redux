import {
	RECEIVE_USERS,
	ADD_USER_ANSWER,
	REMOVE_USER_ANSWER,
	// ADD_USER_QUESTION,
	ADD_QUESTION_TO_USER,
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
			// case ADD_USER_QUESTION:
			// 	let kek = {
			// 		...state,
			// 		[action.author] : {
			// 			...state[action.author],
			// 			questions: [
			// 				...state[action.author].questions.concat(action.question)
			// 			]
			// 		}
			// 	}
			// 	return{
			// 		...state
			// 	}
		case ADD_QUESTION_TO_USER:{

			console.log(ADD_QUESTION_TO_USER, action)
			return{
				...state,
				[action.question.author]:{
					...state[action.question.author],
					questions:[
						...state[action.question.author].questions.concat(action.question.id)
					]
				}
			}
		}
		default:
			return state
	}
}