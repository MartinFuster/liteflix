import React from "react";
import { useSpring, animated } from "react-spring";
import clip from "./images/clip.svg";

const addMovieAnimation = useSpring({
    opacity: addMovieActive ? 1 : 0,
    visibility: addMovieActive ? "visible" : "hidden",
  });

function Modal() {
    return(
        <animated.div className="modal-container" style={addMovieAnimation} onClick={() => handleCategoryExit()}>
          <div className="cross" onClick={() => addMovieExit()}>&times;</div>
            <div className="dropzone">
                <input className="disabled-input"/>
                <p className="dropzone-text">
                    <img src={clip} alt="Agregar Archivo" className="clip"/>
                    <span className="dropzone-text-highlight">Agregar Archivo</span> o arrastrarlo y soltarlo aquí
                </p>
            </div>
            <div className="flex flex-wrap">
                <div className="modal-input-container u-margin-right-3">
                    <div className="modal-input-title">NOMBRE DE LA PELÍCULA</div>
                    <input type="text" className="modal-input"/>
                </div>
                <div className="modal-input-container">
                    <div className="modal-input-title">CATEGORIA</div>
                    <input type="text" className="modal-input modal-input-option" value={""} onClick={() => handleCategoryOpen()} />
                    <div className="modal-input-category-expanded" id="categoryExpanded">
                      <div className="category-container" onClick={() => handleCategoryExit()}>
                        <div className="category-name">Acción</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategoryExit()}>
                        <div className="category-name">Animación</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategoryExit()}>
                        <div className="category-name">Aventura</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategoryExit()}>
                        <div className="category-name">Ciencia Ficción</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategoryExit()}>
                        <div className="category-name">Comedia</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategoryExit()}>
                        <div className="category-name">Documental</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategoryExit()}>
                        <div className="category-name">Crimen</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategoryExit()}>
                        <div className="category-name">Drama</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategoryExit()}>
                        <div className="category-name">Familia</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategoryExit()}>
                        <div className="category-name">Fantasía</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategoryExit()}>
                        <div className="category-name">Historia</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategoryExit()}>
                        <div className="category-name">Terror</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategoryExit()}>
                        <div className="category-name">Música</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategoryExit()}>
                        <div className="category-name">Misterio</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategoryExit()}>
                        <div className="category-name">Romance</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategoryExit()}>
                        <div className="category-name">Pelicula de TV</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategoryExit()}>
                        <div className="category-name">Suspenso</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategoryExit()}>
                        <div className="category-name">Bélica</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategoryExit()}>
                        <div className="category-name">Western</div>
                        <hr className="category-hr"/>
                      </div>
                    </div>
                </div>
            </div>
            <div className="button-container">
              <button type="submit" className="modal-btn">
                  Subir Película
              </button>
            </div>
        </animated.div>
    );
}

export default Modal;