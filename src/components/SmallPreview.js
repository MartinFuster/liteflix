import React from "react";
import playCircle from "../images/play-circle-icon.svg";
import chivronDown from "../images/chivron-down-big.svg";
import like from "../images/thumbs-up.svg";
import plusCircle from "../images/plus-circle-icon.svg";

function SmallPreview(props) {
    const coincidencia = Math.floor((Math.random() * 100) + 1);
    const duracionHora = Math.floor((Math.random() * 2) + 1);
    const duracionMinutos = Math.floor(Math.random() * 60);

    return (
        <div className="coming-soon-movie-box">
                <img src={props.movie} alt="Proximamente" className="coming-soon-img"/>
                <div className="hover-items">
                  <div className="fade-shadow"></div>
                  <div className="engagement-buttons">
                    <img src={plusCircle} alt="Add to favourites" className="engagement-btn"/>
                    <div className="like-circle engagement-btn">
                      <img src={like} alt="Like" className="like"/>
                    </div>
                  </div>
                  <div className="play-button">
                    <img src={playCircle} alt="Play" className="play"/>
                  </div>
                  <div className="movie-info">
                    <div className="movie-info-name">{props.title}</div>
                    <div className="general-info">
                      <div className="match general-info-margin">
                        {coincidencia}% Coincidencia
                      </div>
                      <div className="age-restriction general-info-margin">
                        +16
                      </div>
                      <div className="duration general-info-margin">
                        {duracionHora}h {duracionMinutos} min
                      </div>
                    </div>
                    <div className="genre">
                      {props.genre}
                    </div>
                  </div>
                    <div className="movie-info-down-arrow">
                      <img src={chivronDown} alt="Down arrow" className="down-arrow-big"/>
                    </div>
                </div>
              </div>
    );
}

export default SmallPreview;