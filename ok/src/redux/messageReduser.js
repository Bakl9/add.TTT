const UPDATE_MESSAGE = 'UPDATE-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
	peopleDate: [
		{ name: 'John', id: 1 },
		{ name: 'Sool', id: 2 },
		{ name: 'Vinny', id: 3 },
		{ name: 'Vikki', id: 4 },
	],
	messageData: [
		{ message: 'hello', id: 1 },
		{ message: 'hello', id: 2 },
		{ message: 'hello', id: 3 },
		{ message: 'hello', id: 4 },
		{ message: 'hello', id: 5 },
	],
	newMessageBody: '',
}

export const messageReduser = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_MESSAGE:
			state.newMessageBody = action.body
			return state
		case SEND_MESSAGE:
			let body = state.newMessageBody
			state.newMessageBody = ''
			state.messageData.push({ id: 6, message: body })
			return state
		default:
			return state
	}
}

export const sentMessageCreate = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBody = body => ({
	type: UPDATE_MESSAGE,
	body: body,
})


export default messageReduser 