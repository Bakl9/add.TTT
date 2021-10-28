import React from 'react'
import { AddPost, UpdateNewPosttext } from '../../../redux/profileReduser'
import Post from './Post'

 function postConteinet (props) {

	let state = props.store.getState()

	let postClick = () => {
		props.store.dispatch(AddPost())
	}
	debugger;
	let onPostChange = (text) => {
		let action = UpdateNewPosttext(text)
		debugger;
		props.store.dispatch(action)
	}

	return (
		<Post 
		UpdateNewPosttext={onPostChange}
		postClick={postClick} 
		newPostText={state.profilePage.newPostText}
		postData={state.profilePage.postData}
		/>
	)
 }

 export default postConteinet