import React from 'react'
import '../styles/button.css'

const Button = ({ text }) => {
  return (
    <button type="submit" >{text}</button>
  )
}
export default Button

export function ButtonRed({ text }) {
  return (
    <button className="red-button" type="submit">ACEPTAR</button>
  );
}

export function ButtonWhite() {
  return (
    <button className="white-button" type='submit'>RECHAZAR</button>
  );
}