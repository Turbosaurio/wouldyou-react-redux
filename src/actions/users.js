import {_saveQuestionAnswer, _saveQuestion} from '../utils/_DATA'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'
export const REMOVE_USER_ANSWER = 'REMOVE_USER_ANSWER'
// export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'

export function receiveUsers(users){
	return{
		type: RECEIVE_USERS,
		users,
	}
}

function addUserAnswer({authedUser, qid, answer}){
	return {
		type: ADD_USER_ANSWER,
		authedUser,
		qid,
		answer
	}
}

function removeUserAnswer({authedUser, qid, answer}){
	return {
		type: REMOVE_USER_ANSWER,
		authedUser,
		qid,
		answer
	}
}

// function addUserQuestion(authedUser){
// 	return{
// 		type: ADD_USER_QUESTION,
// 		authedUser
// 	}
// }

export function addQuestionToUser(question){
	return{
		type: ADD_QUESTION_TO_USER,
		question
	}
}


export function handleAddUserAnswer(info){
	return (dispatch) => {
		dispatch(addUserAnswer(info))
		return _saveQuestionAnswer(info)
			.catch((e) => {
				console.warn("Error while updating user's answer", e)
				dispatch(addUserAnswer(info))
				alert("There was an error updating the user's answer, try again.")
			})
	}
}

export function handleRemoveUserAnswer(info){
	return (dispatch) => {
		dispatch(removeUserAnswer(info))
		return _saveQuestionAnswer(info)
			.catch((e) => {
				console.warn("Error while updating user's answer", e)
				dispatch(removeUserAnswer(info))
				alert("There was an error updating the user's answer, try again.")
			})
	}
}

// export function handleAddUserQuestion(info){
// 	return (dispatch) => {
// 		dispatch(addUserQuestion(info))
// 		return _saveQuestion(info)
// 			.catch((e) => {
// 				console.warn("Error while adding the user's question", e)
// 				dispatch(addUserQuestion(info))
// 				alert("There was an error while adding the user's question, try again.")
// 			})
// 	}
// }