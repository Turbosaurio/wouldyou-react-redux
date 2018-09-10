import {getInitialData} from '../utils/API'

import {receiveUsers} from '../actions/users'
import {receiveQuestions} from '../actions/questions'
import {setAuthedUser} from './authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData(){
	return (dispatch) => {
		// dispatch(showLoading())
		return getInitialData()
		.then(({users,questions}) => {
			dispatch(receiveUsers(users))
			dispatch(receiveQuestions(questions))
			dispatch(setAuthedUser(AUTHED_ID))
		})
	}
}