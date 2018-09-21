import {_saveQuestionAnswer} from '../utils/_DATA'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'
export const REMOVE_USER_ANSWER = 'REMOVE_USER_ANSWER'

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


export function handleAddUserAnswer(info){
	return (dispatch) => {
		dispatch(addUserAnswer(info))
		return _saveQuestionAnswer(info)
			.catch((e) => {
				console.warn("Error while updating question", e)
				dispatch(addUserAnswer(info))
				alert("There was an error updating the question, try again.")
			})
	}
}

export function handleRemoveUserAnswer(info){
	return (dispatch) => {
		dispatch(removeUserAnswer(info))
		return _saveQuestionAnswer(info)
			.catch((e) => {
				console.warn("Error while updating question", e)
				dispatch(removeUserAnswer(info))
				alert("There was an error updating the question, try again.")
			})
	}
}