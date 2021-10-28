import React from 'react'
import { AddPost, UpdateNewPosttext } from '../../../redux/profileReduser'
import Post from './Post'

export function poctConteiner (props) {

	let state = props.store.getState()

	let postClick = () => {
		props.store.dispatch(AddPost())
	}

	let onPostChange = (text) => {
		let action = UpdateNewPosttext(text)
		props.store.store.dispatch(action)
	}
	debugger;
	return (
		<Post 
		UpdateNewPosttext={onPostChange}
		postClick={postClick} 
		newPostText={state.profilePage.newPostText}
		postData={state.profilePage.postData}
		/>
	)
 }

