import React from "react";
import "../styles/slider.module.css"

function Slider ({imagenes}){
    const [imagenActual, setImagenActual]= React.useState(0);

    const cantidad = imagenes?.lenght;

    if (!Array.isArray(imagenes) || cantidad == 0) return;

    const siguienteInagen = () => {
        setImagenActual(imagenActual == cantidad-1 ? 0: imagenActual+1);
    }

    const anteriorImagen =  () => {
        setImagenActual(imagenActual ==  0 ? cantidad - 1 : imagenActual-1);
    }

    return (
        <div className="container">
            {imagenes.map((imagen, index) => 
               <img key={index} src={imagen} alt={"imagen"} />
            )}
        </div>
        );
}

export default Slider;


/*

    return (
        <div className="container">
            <button onClick={anteriorImagen}>←</button>
            {imagenes.map((imagen, index) => {
                return (
                        <div > {imagenActual == index &&(
                          <img key={index} src={imagen} alt={"imagen"} />
                          )}
                        </div>
                    );
               })
            }
            <button onClick={siguienteInagen}>→</button>
        </div>
        )
        */