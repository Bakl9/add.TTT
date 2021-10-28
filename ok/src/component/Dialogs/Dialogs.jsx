import React from 'react'
import s from './Dialogs.module.css'
import People from './people/People'
import Message from './Message/Message'

export default function Dialogs(props) {
	
	let state = props.messagePage

	const MessageItem = state.messageData.map(el => (
		<Message message={el.message} id={el.id} />
	))

	const PeopleItem = state.peopleDate.map(people => (
		<People name={people.name} id={people.id} />
	))
	const newMessageBody = state.newMessageBody

	const onMessageClick = () => {
		props.sentMessageCreate()
	}

	const newMessageChange = e => {
		let body = e.target.value
		props.updateNewMessageBody(body)
	}

	return (
		<div>
			<div className={s.box}>
			<div className={s.dialog}>
				<div className={s.People}>{PeopleItem}</div>
				<div className={s.Message}>{MessageItem}</div>
				<div>
					<div>
						<button onClick={onMessageClick}>Click</button>
					</div>
			</div>
		
					<div className={s.messagePeople}>
						<textarea
							onChange={newMessageChange}
							value={newMessageBody}
							placeholder="enter your message"
						></textarea>
					</div>
				</div>
			</div>
		</div>
	)
}
