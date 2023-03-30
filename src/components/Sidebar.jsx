import React, { useEffect } from 'react';
import '../styles/sidebar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const Sidebar = ({ searchText, setSearchText }) => {
  const [menu, setMenu] = useState(false);

  const token = localStorage.getItem('token');

  const { email } = jwtDecode(token);

  const homeRoute = email == 'devrrior@gmail' ? '/cards' : '/constructora';

  return (
    <nav className={menu ? 'open' : ''}>
      <div className='logo'>
        <i className='bx bx-menu menu-icon' onClick={() => setMenu(!menu)}></i>
        <Link to={'/constructora'} className='logo-name hidden'>
          Convocatoria
        </Link>
      </div>
      <div className='sidebar'>
        <div className='logo'>
          <i
            className='bx bx-menu menu-icon'
            onClick={() => setMenu(!menu)}
          ></i>
          <span className='logo-name'>Menu</span>
        </div>

        <div className='sidebar-content'>
          {email == 'devrrior@gmail.com' && (
            <li className='list'>
              <Link to='/create' className='nav-link'>
                <i className='bx bx-folder-open icon'></i>
                <span className='link'>Crear convoctaria</span>
              </Link>
            </li>
          )}

          <div className='bottom-cotent'>
            <li className='list'>
              <a href='/' className='nav-link'>
                <i className='bx bx-log-out icon'></i>
                <span className='link'>Cerrar Sesion</span>
              </a>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
