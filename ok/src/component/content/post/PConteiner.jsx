import React from 'react'
import { AddPost, UpdateNewPosttext } from '../../../redux/profileReduser'
import Post from './Post'
import StoreContext from '../../../StoreContext'

 function postConteinet (props) {

	return (
		<StoreContext.Consumer> 
			{
			(store) => {
				let state = store.getState()
				let postClick = () => {
					store.dispatch(AddPost())
				}

				let onPostChange = (text) => {
					let action = UpdateNewPosttext(text)
					debugger;
					store.dispatch(action)
				}
			
				return (
				<Post 
				UpdateNewPosttext={onPostChange}
				postClick={postClick}  
				newPostText={state.profilePage.newPostText}
				postData={state.profilePage.postData}
				/>
				)
		}}
		</StoreContext.Consumer>
	)
 }

 export default postConteinet