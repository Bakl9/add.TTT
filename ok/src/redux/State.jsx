import { messageReduser } from './messageReduser'
import { profileReduser } from './profileReduser'
import { sideBarReduser } from './sedeBarReduser'

const UPDATE_POST = 'UPRATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
	rerenderEntireTree() {},

	_state: {
		messagePage: {
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
		},
		profilePage: {
			postData: [
				{ id: 1, like: 1, message: 'hello' },
				{ id: 2, like: 24, message: 'hello' },
				{ id: 3, like: 56, message: 'hello' },
				{ id: 4, like: 109, message: 'hello' },
			],
			newPostText: '',
		},
		sideBarPage : {

		}
	},

	getState() {
		return this._state
	},

	subscribe(observer) {
		this.rerenderEntireTree = observer
	},

	dispatch(action) {
		this._state.profilePage = profileReduser(this._state.profilePage, action)
		this._state.messagePage = messageReduser(this._state.messagePage, action)
		this._state.sideBarPage = sideBarReduser(this._state, action)
		this.rerenderEntireTree(this._state)
	},
} // 17:15

export const AddPost = () => ({ type: ADD_POST })
export const UpdateNewPosttext = text => ({ type: UPDATE_POST, newText: text })
export const sentMessageCreate = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBody = body => ({
	type: UPDATE_MESSAGE,
	body: body,
})

export default store
