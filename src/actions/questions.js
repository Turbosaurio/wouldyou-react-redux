import {
	_saveQuestionAnswer,
	_saveQuestion,
} from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const REMOVE_QUESTION_VOTE = 'REMOVE_QUESTION_VOTE'
export const ADD_QUESTION_VOTE = 'ADD_QUESTION_VOTE'
export const ADD_NEW_QUESTION = "ADD_NEW_QUESTION"


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

function addNewQuestion(info){
	return {
		type: ADD_NEW_QUESTION,
		info
	}
}

export function handleRemoveQuestionVote(info){
	return (dispatch) => {
		dispatch(removeQuestionVote(info))
		return _saveQuestionAnswer(info)
			.catch((e) => {
				console.warn("Error while removing question vote", e)
				dispatch(removeQuestionVote(info))
				alert("There was an while removing question vote, try again.")
			})
	}
}

export function handleAddQuestionVote(info){
	return (dispatch) => {
		dispatch(addQuestionVote(info))
		return _saveQuestionAnswer(info)
			.catch((e) => {
				console.warn("Error while adding question vote", e)
				dispatch(addQuestionVote(info))
				alert("There was an error while adding the question vote, try again.")
			})
	}
}

export function handleAddNewQuestion(info){
	return (dispatch) => {
		return _saveQuestion(info)
			.then((question)=> {
				dispatch(addNewQuestion(question))
			})
			.catch((e) => {
				console.warn("Error while creating the question", e)
				alert("There was an error while creating the question, try again.")
			})
	}
}