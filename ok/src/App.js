import './App.css'
import s from './component/content/Content.module.css'
import Header from './component/header/Header'
import Content from './component/content/Content'
import NavBar from './component/navBar/NavBar'
import { BrowserRouter, Route } from 'react-router-dom'
import DialogsConteiner from './component/Dialogs/DialogsConteiner'

function App(props) {
	return (
		<BrowserRouter>
			<div className="App_wrapper">
				<Header />
				<NavBar />
				<div className={s.content}>
					<Route path="/Profile" render={() => <Content />} />
					<Route path="/Message" render={() => <DialogsConteiner />} />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
