import React from 'react'
import s from './Post.module.css'
import NewPost from './NewPost/NewPost'

debugger;
const Post = (props) => {
	const Postinfo = 
	props.postData.map(p => (
		<NewPost like={p.like} message={p.message} />
	))
	
	let newPostElement = React.createRef()

	let postClick = () => {
		props.postClick()
		// props.dispatch(AddPost())
		
	}

	let onPostChange = () => {
		let text = newPostElement.current.value
		props.UpdateNewPosttext(text)
		// let action = UpdateNewPosttext(text)
		// props.dispatch(action)
	}

	return (
		<div>
			<div className={s.post}></div>
			<textarea
				onChange={onPostChange}
				ref={newPostElement}
				value={props.newPostText}
			></textarea>
			<button onClick={postClick}>добавить</button>
			{Postinfo}
			{/* <NewPost like={postData[0].like} message={postData[0].message} /> */}
		</div>
	)
}

export default Post