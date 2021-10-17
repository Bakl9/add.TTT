const UPDATE_POST = 'UPRATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

export const profileRedux = (state, action) => {
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
