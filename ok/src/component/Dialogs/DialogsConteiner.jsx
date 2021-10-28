import React from 'react'
import { updateNewMessageBody, sentMessageCreate } from '../../redux/messageReduser'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'

const  DialogsConteiner =  () => {

	return <StoreContext.Consumer> 
		{
		
		(store) => {

			const onMessageClick = () => {
				store.dispatch(sentMessageCreate())
			}
		
			const newMessageChange = body => {
				store.dispatch(updateNewMessageBody(body))
			}
			return <Dialogs
			updateNewMessageBody={newMessageChange}
			sentMessageCreate={onMessageClick}
			messagePage={store.getState().messagePage}
			/>
		}	
	}
		</StoreContext.Consumer>
	
}

export default DialogsConteiner