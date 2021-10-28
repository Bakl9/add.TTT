import React from 'react'
import s from './Content.module.css'
import PConteiner from './post/PConteiner'

export default function Content(props) {

	return (
		<div className={s.content}>
			<div>
				<img
					className={s.img}
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1WI2hziPDHpkDeFIjtxC86g6P3oO9YrSAQ&usqp=CAU"
					alt="abstraction"
				/>
			</div>
			<PConteiner 
			store={props.store} 
			/>
		</div>
	)
}
