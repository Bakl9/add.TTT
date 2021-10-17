const UPDATE_MESSAGE = 'UPDATE-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const messageRedux = (state, action) => {
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
