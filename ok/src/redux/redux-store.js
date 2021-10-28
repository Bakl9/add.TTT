import { combineReducers, createStore } from 'redux'
import  sideBarReduser  from './sedeBarReduser'
import  messageReduser  from './messageReduser'
import  profileReduser  from './profileReduser'

let reducer = combineReducers({
	sideBarPage: sideBarReduser,
	messagePage: messageReduser,
	profilePage: profileReduser,
})

let store = createStore(reducer)

export default store 
