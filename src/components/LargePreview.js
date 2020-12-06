import React from "react";
import playCircle from "../images/play-circle-icon.svg";
import chivronDown from "../images/chivron-down-big.svg";
import like from "../images/thumbs-up.svg";

function LargePreview(props) {
    const coincidencia = Math.floor((Math.random() * 100) + 1);
    const duracionHora = Math.floor((Math.random() * 2) + 1);
    const duracionMinutos = Math.floor(Math.random() * 60);

    return (
        <div className="popular-movie-box coming-soon-movie-box">
                <img src={props.movie} alt="Proximamente" className="popular-movie-img"/>
                <div className="hover-items">
                  <div className="fade-shadow fade-shadow-alt"></div>
                  <div className="movie-info">
                  <div className="play-button play-button-alt">
                    <img src={playCircle} alt="Play" className="play"/>
                  </div>
                    <div className="movie-info-name">{props.title}</div>
                      <div className="match general-info-margin">
                        {coincidencia}% Coincidencia
                      </div>
                    <div className="general-info">
                      <div className="age-restriction general-info-margin">
                        +16
                      </div>
                      <div className="duration general-info-margin">
                        {duracionHora}h {duracionMinutos} min
                      </div>
                    </div>
                    <div className="genre genre-alt">
                      {props.genre}
                    </div>
                  </div>
                    <div className="down-arrow-big-alt">
                      <img src={chivronDown} alt="Down arrow" className="down-arrow-big"/>
                    </div>
                  <div className="like-button-container">
                    <div className="like-circle engagement-btn">
                      <img src={like} alt="Like" className="like"/>
                    </div>
                  </div>
                </div>
              </div>
    );
}

export default LargePreview;