import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm';
import Card from "../components/Card";
import "../styles/login.css"
import Navbar from '../components/Navbar';
import Form from '../components/Form';

export const LoginPage = () => {
	const navigate = useNavigate();

	const { name, email, password, onInputChange, onResetForm } =
		useForm({
			name: '',
			email: '',
			password: '',
		});

	const onLogin = e => {
		e.preventDefault();

		navigate('/dashboard', {
			replace: true,
			state: {
				logged: true,
				name,
			},
		});

		onResetForm();
	};

	return (
		<div className="wrapper">
			<form onSubmit={onLogin}>
				<Navbar/>
				<div className="forma">
				   <h1>Iniciar Sesión</h1> 
				    <div className="input-group">
				       <label htmlFor="email">Correo electronico</label>
					      <input
						   type='email'
						 name='email'
					     id='email'
						 value={email}
						 placeholder={'INGRESA TU CORREO'}
						 onChange={onInputChange}
						 required
						 autoComplete='off'
					    />
				    </div>
				    <div className="input-group">
				       <label htmlFor="password">Contraseña</label>
					   <input
						type='password'
						name='password'
						id='password'
						value={password}
						placeholder={'**********'}
						onChange={onInputChange}
						required
						autoComplete='off'
					    />
				    </div>
				<button>Ingresar</button>
				</div>
			</form>
		</div>
	);
};
