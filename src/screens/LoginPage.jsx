import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm';
import '../styles/login.css';
import Navbar from '../components/Navbar';
import { useWebsocket } from '../hook/useWebsocket';
import jwtDecode from 'jwt-decode';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { addToken } = useWebsocket();

  const { name, email, password, onInputChange, onResetForm } = useForm({
    name: '',
    email: '',
    password: '',
  });

  const onLogin = async (e) => {
    e.preventDefault();

    const rawResponse = await fetch('http://54.208.161.248:3001/api/auth', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (rawResponse.status == 201) {
      const content = await rawResponse.json();

      localStorage.setItem('token', content.token);

      addToken(content.token);

			const { email } = jwtDecode(content.token);

			const route = email == 'devrrior@gmail.com' ? '/cards' : '/constructora';

      navigate(route);

			return;
    }

		alert('Datos invalidos');

    onResetForm();
  };

  return (
    <div className='wrapper'>
      <form onSubmit={onLogin}>
        <Navbar />
        <div className='forma'>
          <h1>Iniciar Sesión</h1>
          <div className='input-group'>
            <label htmlFor='email'>Correo electronico</label>
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
          <div className='input-group'>
            <label htmlFor='password'>Contraseña</label>
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
          <button type='submit'>Ingresar</button>
        </div>
      </form>
    </div>
  );
};
