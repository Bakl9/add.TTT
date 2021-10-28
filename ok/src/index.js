import store from './redux/State'
import React, { Profiler } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import StoreContext from './StoreContext'


let rerenderEntireTree = state => {
	ReactDOM.render(
		
		<React.StrictMode>
			<Profiler store={store}>
			<App
			/>
			</Profiler>
		</React.StrictMode>,
		document.getElementById('root')
	)
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
	let state = store.getState()
	rerenderEntireTree(state)
})
