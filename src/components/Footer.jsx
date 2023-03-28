import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div>
              <h4>Informacion</h4>
              <ul className="nombres">
                <li>
                  <p>+52961736724</p>
                </li>
                <li>
                  <p>
                    <a href="#">Inmobiliaria@gmail.com</a>
                  </p>
                </li>
                <li>
                  <p>Carretera VillaFlores, Suchiapa, Chiapas</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center"></div>
      </div>
    </footer>
  );
}
