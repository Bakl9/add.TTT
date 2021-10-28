import React from 'react'
import { updateNewMessageBody, sentMessageCreate } from '../../redux/messageReduser'
import Dialogs from './Dialogs'

const  DialogsConteiner =  (props) => {
	let state = props.store._state

	const onMessageClick = () => {
		props.store.dispatch(sentMessageCreate())
	}

	const newMessageChange = body => {
		props.store.dispatch(updateNewMessageBody(body))
	}

	return (
		<div>
			<Dialogs
			updateNewMessageBody={newMessageChange}
			sentMessageCreate={onMessageClick}
			messagePage={state}
			/>
		</div>
	)
}

export default DialogsConteiner