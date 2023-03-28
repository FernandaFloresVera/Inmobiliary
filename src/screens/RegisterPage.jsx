import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm';
import { LoginPage } from './LoginPage';
import "../styles/register.css"

export const RegisterPage = () => {
	const navigate = useNavigate();

	const { name, email, password, onInputChange, onResetForm } =
		useForm({
			name: '',
			email: '',
			password: '',
		});

	const onRegister = e => {
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
		<div className='wrapper'>
			<form onSubmit={onRegister}>
				<div className='forma'>
				<h1>Registrarse</h1>

				<div className='input-group'>
				<label htmlFor='name' required>Nombre de la empresa</label>
					<input
						type='text'
						name='name'
						id='name'
						value={name}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
				</div>

				<div className='input-group'>
				<label htmlFor='email' required>Correo Electronico</label>
					<input
						type='email'
						name='email'
						id='email'
						value={email}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
					
				</div>
				<div className='input-group'>
				<label htmlFor='password' required>Contraseña</label>
					<input
						type='password'
						name='password'
						id='password'
						value={password}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
				</div>


				<a href="/login" className='boton'>Registrate</a>
				
				</div>
			</form>
		</div>
	);
};
