export const RECEIVE_USERS = 'RECEIVE_USERS'
export const REMOVE_QUESTION = 'REMOVE_QUESTION'

export function receiveUsers(users){
	return{
		type: RECEIVE_USERS,
		users,
	}
}

function removeQuestion(users, questionId){
	return{
		type: REMOVE_QUESTION,
		users
	}
}
