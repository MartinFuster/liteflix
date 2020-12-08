import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import clip from "../images/clip.svg";

function Modal(props) {
    
  const [addMovieActive, setAddMovieActive] = useState(false);
  const [movieCategory, setMovieCategory] = useState("");

  useEffect(() => {
    setAddMovieActive(props.addMovieActive);
  }, [props.addMovieActive]);

  const addMovieAnimation = useSpring({
    opacity: addMovieActive ? 1 : 0,
    visibility: addMovieActive ? "visible" : "hidden",
  });

  function handleCategoryOpen() {
    const categoryExpanded = document.getElementById("categoryExpanded");
    setTimeout(() => {
      categoryExpanded.style.visibility = "visible";
    }, 50);
    categoryExpanded.style.opacity = 1;
  }

  function handleCategorySelection(category) {
    setMovieCategory(category);
    handleCategoryExit();
  }

  function handleCategoryExit() {
    const categoryExpanded = document.getElementById("categoryExpanded");
    if (categoryExpanded.style.visibility === "visible") {
      categoryExpanded.style.opacity = 0;
      setTimeout(() => {
        categoryExpanded.style.visibility = "hidden";
      }, 200);
    }
  }

  function addMovieExit() {
    setAddMovieActive(false);
    handleCategoryExit();
    props.addMovieExit();
  }
  
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
                    <input type="text" className="modal-input modal-input-option" value={movieCategory} onClick={() => handleCategoryOpen()} />
                    <div className="modal-input-category-expanded" id="categoryExpanded">
                      <div className="category-container" onClick={() => handleCategorySelection("Acción")}>
                        <div className="category-name">Acción</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategorySelection("Animación")}>
                        <div className="category-name">Animación</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategorySelection("Aventura")}>
                        <div className="category-name">Aventura</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategorySelection("Ciencia Ficción")}>
                        <div className="category-name">Ciencia Ficción</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategorySelection("Comedia")}>
                        <div className="category-name">Comedia</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategorySelection("Documental")}>
                        <div className="category-name">Documental</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategorySelection("Crimen")}>
                        <div className="category-name">Crimen</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategorySelection("Drama")}>
                        <div className="category-name">Drama</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategorySelection("Familia")}>
                        <div className="category-name">Familia</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategorySelection("Fantasía")}>
                        <div className="category-name">Fantasía</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategorySelection("Historia")}>
                        <div className="category-name">Historia</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategorySelection("Terror")}>
                        <div className="category-name">Terror</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategorySelection("Música")}>
                        <div className="category-name">Música</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategorySelection("Misterio")}>
                        <div className="category-name">Misterio</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategorySelection("Romance")}>
                        <div className="category-name">Romance</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategorySelection("Pelicula de TV")}>
                        <div className="category-name">Pelicula de TV</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategorySelection("Suspenso")}>
                        <div className="category-name">Suspenso</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategorySelection("Bélica")}>
                        <div className="category-name">Bélica</div>
                        <hr className="category-hr"/>
                      </div>
                      <div className="category-container" onClick={() => handleCategorySelection("Western")}>
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