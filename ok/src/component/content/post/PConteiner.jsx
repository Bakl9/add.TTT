import React from 'react'
import { AddPost, UpdateNewPosttext } from '../../../redux/profileReduser'
import Post from './Post'
import { connect } from 'react-redux'

//  function postConteinet (props) {

// 	return (
// 		<StoreContext.Consumer> 
// 			{
// 			(store) => {
// 				let state = store.getState()
// 				let postClick = () => {
// 					store.dispatch(AddPost())
// 				}

// 				let onPostChange = (text) => {
// 					let action = UpdateNewPosttext(text)
// 					store.dispatch(action)
// 				}
			
// 				return (
// 				<Post 
// 				UpdateNewPosttext={onPostChange}
// 				postClick={postClick}  
// 				newPostText={state.profilePage.newPostText}
// 				postData={state.profilePage.postData}
// 				/>
// 				)
// 		}}
// 		</StoreContext.Consumer>
// 	)
//  }
const StateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText,
		postData: state.profilePage.postData
	}
}

debugger;
const DispatchToProps = (dispatch) => {
	return {
		UpdateNewPosttext : (text) => {
			let action = UpdateNewPosttext(text)
			dispatch(action)
		},
		postClick : () => {
			dispatch(AddPost())
		}
	}
	
}

 const postConteiner = connect(StateToProps,DispatchToProps)(Post)

 export default postConteiner