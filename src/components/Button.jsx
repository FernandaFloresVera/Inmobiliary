import React from 'react';
import '../styles/button.css';
import { useWebsocket } from '../hook/useWebsocket';
import jwtDecode from 'jwt-decode';

const Button = ({ text }) => {
  return <button type='submit'>{text}</button>;
};
export default Button;

export function ButtonRed({ id }) {
  const { websocket } = useWebsocket();

  const acceptProject = () => {
    const token = localStorage.getItem('token');

    const { name: responsibleConstructor } = jwtDecode(token);

    const payload = {
      id,
      responsibleConstructor,
    };

    websocket.emit('update_project_event', payload);
  };

  return (
    <button className='red-button' onClick={() => acceptProject()}>
      ACEPTAR
    </button>
  );
}

export function ButtonWhite() {
  return (
    <button className='white-button' type='submit'>
      RECHAZAR
    </button>
  );
}
