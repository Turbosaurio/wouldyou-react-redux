import {_saveQuestionAnswer} from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const REMOVE_QUESTION_VOTE = 'REMOVE_QUESTION_VOTE'
export const ADD_QUESTION_VOTE = 'ADD_QUESTION_VOTE'


export function receiveQuestions(questions){
	return{
		type: RECEIVE_QUESTIONS,
		questions,
	}
}

function removeQuestionVote(questions){
	return{
		type: REMOVE_QUESTION_VOTE,
		questions,
	}
}

function addQuestionVote(questions){
	return {
		type: ADD_QUESTION_VOTE,
		questions,
	}
}

export function handleRemoveQuestionVote(info){
	return (dispatch) => {
		dispatch(removeQuestionVote(info))
		return _saveQuestionAnswer(info)
			.catch((e) => {
				console.warn("Error while updating question", e)
				dispatch(removeQuestionVote(info))
				alert("There was an error updating the question, try again.")
			})
	}
}

export function handleAddQuestionVote(info){
	return (dispatch) => {
		dispatch(addQuestionVote(info))
		return _saveQuestionAnswer(info)
			.catch((e) => {
				console.warn("Error while updating question", e)
				dispatch(addQuestionVote(info))
				alert("There was an error updating the question, try again.")
			})
	}
}