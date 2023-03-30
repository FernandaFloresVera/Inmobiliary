import React from 'react'
import Form from '../components/Form'
import Sidebar from '../components/Sidebar'
import '../styles/createAnnoun.css'
import { useWebsocket } from '../hook/useWebsocket'

const CreateAnnoun = () => {

	const {websocket} = useWebsocket();


  return (
		<section className='container'>
			<div className='box-create'>
				<h2 className='title'>Crear Convocatoria</h2>
				<p className='text'>Ingresa los siguientes datos para crear una nueva convocatoria</p>
				<Sidebar />
				<Form websocket={websocket} />
			</div>
			<div className='box-create imagen'>
				<img
					className='img'
					src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3154597/house-clipart-md.png"
					alt="Casa"
				/>
			</div>
		</section>
  )
}

export default CreateAnnoun
