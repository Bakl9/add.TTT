import  messageReduser  from './messageReduser'
import  profileReduser  from './profileReduser'
import  sideBarReduser  from './sedeBarReduser'

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



export default store
