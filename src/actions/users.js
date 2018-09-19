import {_saveQuestionAnswer} from '../utils/_DATA'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'

export function receiveUsers(users){
	return{
		type: RECEIVE_USERS,
		users,
	}
}

function updateUserAnswer({authedUser, qid, answer}){
	return {
		type: SAVE_USER_ANSWER,
		authedUser,
		qid,
		answer
	}
}
export function handleUpdateUserAnswer(info){
	return (dispatch) => {
		dispatch(updateUserAnswer(info))
		return _saveQuestionAnswer(info)
			.catch((e) => {
				console.warn("Error while updating question", e)
				dispatch(updateUserAnswer(info))
				alert("There was an error updating the question, try again.")
			})
	}
}