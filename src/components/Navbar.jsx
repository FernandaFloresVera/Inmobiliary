import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/register">REGISTRATE</a>
        </div>

        <div className="container-fluid">
            <a className="navbar-brand" href="/login">INICIAR SESION</a>
        </div>
    </nav> 
  );
}
