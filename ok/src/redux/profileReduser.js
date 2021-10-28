const UPDATE_POST = 'UPRATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

let initialState = {
	postData: [
		{ id: 1, like: 1, message: 'hello' },
		{ id: 2, like: 24, message: 'hello' },
		{ id: 3, like: 56, message: 'hello' },
		{ id: 4, like: 109, message: 'hello' },
	],
	newPostText: '',
}

 const profileReduser = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 0,
			}
			state.postData.push(newPost)
			state.newPostText = ''
			return state
		case UPDATE_POST:
			state.newPostText = action.newText
			return state
		default:
			return state
	}
}


export const AddPost = () => ({ type: ADD_POST })
export const UpdateNewPosttext = text => ({ type: UPDATE_POST, newText: text })


export default profileReduser