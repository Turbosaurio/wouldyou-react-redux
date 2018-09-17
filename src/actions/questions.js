export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'

export function receiveQuestions(questions){
	return{
		type: RECEIVE_QUESTIONS,
		questions,
	}
}

export function saveQuestion(question){
	return{
		type: SAVE_QUESTION,
		question,
	}
}

function updateQuestion(info){
	return {
		type: SAVE_QUESTION,
		info
	}
}

export function handleUpdateQuestion(info){
	return (dispatch) => {
		dispatch(updateQuestion(info))
		return updateQuestion(info)
			.catch((e) => {
				console.warn("Error while updating question", e)
				dispatch(updateQuestion(info))
				alert("There was an error updating the question, try again.")
			})
	}
}