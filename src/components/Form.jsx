import React, { useState } from "react";
import Button from "./Button";
import '../styles/form.css';
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function Form({websocket}) {
  const navigate = useNavigate();
  const [datos, setDatos] = useState({
    nombre: "",
    descripcion: "",
    presupuesto: 0,
    tipoObra: "",
    imagen: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario al servidor

    const formData = new FormData();
    formData.append('file', datos.imagen)

    const rawResponse = await fetch('http://54.208.161.248:3001/api/file', {
      method: 'POST',
      body: formData,
    });

    const content = await rawResponse.json();

    const imageURL = content.url;


    console.log(imageURL);

    const payload = {
      name: datos.nombre,
      description: datos.descripcion,
      budget: datos.presupuesto,
      type: datos.tipoObra,
      imageURL,
    }

    websocket.emit('create_project_event', payload);

    const { email } = jwtDecode(localStorage.getItem('token'));

    const route = email == 'devrrior@gmail.com' ? '/cards' : '/constructora';

    navigate(route, {
      replace: true,
      state: {
        logged: true,
      },
    });
  };

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    setDatos((prevDatos) => ({
      ...prevDatos,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre</label>
      <input
        id="nombre"
        type="text"
        name="nombre"
        value={datos.nombre}
        onChange={handleChange}
        placeholder='Escribe el nombre de la obra'
      />

      <label htmlFor="descripcion">Descripción</label>
      <textarea
        id="descripcion"
        name="descripcion"
        value={datos.descripcion}
        onChange={handleChange}
        placeholder='Ingresa aqui la descripción de la obra'
      ></textarea>

      <div className="container-input">
        <div className="presupuesto">
          <label htmlFor="presupuesto">Presupuesto</label>
          <input
            id="presupuesto"
            type="number"
            name="presupuesto"
            value={datos.presupuesto}
            onChange={handleChange}
            min={0}
          />
        </div>
        <div className="tipo">
          <label htmlFor="tipoObra">Tipo de obra</label>
          <input
            id="tipoObra"
            type="text"
            name="tipoObra"
            value={datos.tipoObra}
            onChange={handleChange}
            placeholder='Tipo de obra'
          />
        </div>
      </div>


      <label htmlFor="imagen">Subir imagen</label>
      {
        datos.imagen ?
        <img
          src={URL.createObjectURL(datos.imagen)}
          alt="imagen"
          className="imagen-img"
        /> :
        <>
          <label htmlFor="imagen" className="label-img">
            <span>Pulsa aqui para subir</span>
          </label>
        </>
      }

      <input
        id="imagen"
        className="none"
        type="file"
        name="imagen"
        accept="image/*"
        onChange={handleChange}
      />

      <Button text="Crear Convocatoria" />
    </form>
  );
}
