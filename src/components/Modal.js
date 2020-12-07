import React from "react";
import enlaceIcon from "../images/enlace.svg";

function Modal() {
    return(
        <div className="modal-container">
            <div className="dropzone">
                <input />
                <p className="dropzone-text">
                    <img src={enlaceIcon} alt="Agregar Archivo"/>
                    <span className="dropzone-text-highlight">Agregar Archivo</span>
                    o arrastrarlo y soltarlo aquí
                </p>
            </div>
            <div className="flex">
                <div className="modal-input-container">
                    <div className="modal-input-title">NOMBRE DE LA PELÍCULA</div>
                    <input type="text" className="modal-input"/>
                </div>
                <div className="modal-input-container">
                    <div className="modal-input-title">CATEGORIA</div>
                    <input type="text" className="modal-input"/>
                </div>
            </div>
            <button type="submit" className="modal-btn">
                Subir Película
            </button>
        </div>
    );
}

export default Modal;