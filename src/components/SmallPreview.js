import React from "react";
import playCircle from "../images/play-circle-icon.svg";
import chivronDown from "../images/chivron-down-big.svg";
import like from "../images/thumbs-up.svg";
import plusCircle from "../images/plus-circle-icon.svg";

function SmallPreview(props) {
    const coincidencia = Math.floor((Math.random() * 100) + 1);
    const duracionHora = Math.floor((Math.random() * 2) + 1);
    const duracionMinutos = Math.floor(Math.random() * 60);
    const genres = [
      {
        "id": 28,
        "name": "Acción"
      },
      {
        "id": 12,
        "name": "Aventura"
      },
      {
        "id": 16,
        "name": "Animación"
      },
      {
        "id": 35,
        "name": "Comedia"
      },
      {
        "id": 80,
        "name": "Crimen"
      },
      {
        "id": 99,
        "name": "Documental"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Familia"
      },
      {
        "id": 14,
        "name": "Fantasía"
      },
      {
        "id": 36,
        "name": "Historia"
      },
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 10402,
        "name": "Música"
      },
      {
        "id": 9648,
        "name": "Misterio"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Ciencia ficción"
      },
      {
        "id": 10770,
        "name": "Película de TV"
      },
      {
        "id": 53,
        "name": "Suspense"
      },
      {
        "id": 10752,
        "name": "Bélica"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ];

    let genre = "";

    genres.forEach(obj => {
      if (parseInt(props.genreID) === obj.id) {
        genre = obj.name;
      }
    });

    return (
        <div className="coming-soon-movie-box">
                <img src={props.movie} alt={props.title} className="coming-soon-img"/>
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
                      {genre !== "Acción" && genre !== "Western" && genre !== "Suspenso"
                          && genre !== "Drama" ? genre !== "Familia" && genre !== "Comedia" 
                          && genre !== "Aventura" ? "+13" : "+3" : "+16"}
                      </div>
                      <div className="duration general-info-margin">
                        {duracionHora}h {duracionMinutos} min
                      </div>
                    </div>
                    <div className="genre">
                      {genre}
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