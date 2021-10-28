import React from 'react'
import { updateNewMessageBody, sentMessageCreate } from '../../redux/messageReduser'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'



const mapStateTopProps = (state) => {
	return {
		messagePage: state.messagePage
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBody(body))
		},
		sentMessageCreate : () => {
			dispatch(sentMessageCreate())
		}
	}
}
 
const SuperDialogsConteiner = connect(mapStateTopProps,mapDispatchToProps)(Dialogs)

export default SuperDialogsConteiner