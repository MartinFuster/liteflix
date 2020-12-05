import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import featuredImgInit from "./images/destacada-demo-img.jpeg";
import play from "./images/play-icon.svg";
import plus from "./images/plus-icon.svg";
import comingSoonMovie from "./images/proximamente-demo-img.png";
import popularMovie from "./images/populares-demo-img.png";
import plusCircle from "./images/plus-circle-icon.svg";
import like from "./images/thumbs-up.svg";
import playCircle from "./images/play-circle-icon.svg";
import chivronDown from "./images/chivron-down-big.svg";

function App() {

  const description = "Lorem ipsum dolor amet chicharrones dreamcatcher hammock bushwick hell of, ethical 3 wolf moon celiac neutra mumblecore four dollar toast. Slow-carb post-ironic kickstarter synth franzen."

  const [featuredImg, setFeaturedImg] = useState(featuredImgInit);
  const [featuredMovieName, setFeaturedMovieName] = useState("Kids at school");
  const [movieDescription, setMovieDescription] = useState(description)
  return (
    <div className="App">
      <div className="home">
        <div className="featured-img-shadow"></div>
          <div className="container">
            <Navbar />
            <div className="movie-info-box">
              <div className="featured-title">
                ORIGINAL DE <span className="bold">LITEFLIX</span>
              </div>
              <div className="featured-movie-name">
                {featuredMovieName}
              </div>
              <div className="featured-movie-buttons">
                <button className="featured-movie-btn">
                  <img src={play} alt="Reproducir" className="featured-movie-icon"/>
                  Reproducir
                </button>
                <button className="featured-movie-btn">
                  <img src={plus} alt="Agregar" className="featured-movie-icon"/>
                  Mi Lista
                </button>
              </div>
              <div className="featured-movie-resume-box">
                <div className="featured-movie-title-small">
                  Ver Temporada 1
                </div>
                <div className="featured-movie-text">
                  {movieDescription}
                </div>
              </div>
            </div>

          <div className="coming-soon-box">
            <h2 className="coming-soon-title">
              Próximamente
            </h2>
            <div className="flex-four">
              <div className="coming-soon-movie-box">
                <img src={comingSoonMovie} alt="Proximamente" className="coming-soon-img"/>
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
                    <div className="movie-info-name">House of Cards</div>
                    <div className="general-info">
                      <div className="match general-info-margin">
                        98% Coincidencia
                      </div>
                      <div className="age-restriction general-info-margin">
                        +16
                      </div>
                      <div className="duration general-info-margin">
                        1h 30 min
                      </div>
                    </div>
                    <div className="genre">
                      Suspenso
                    </div>
                  </div>
                    <div className="movie-info-down-arrow">
                      <img src={chivronDown} alt="Down arrow" className="down-arrow-big"/>
                    </div>
                </div>
              </div>
              <div className="coming-soon-movie-box">
                <img src={comingSoonMovie} alt="Proximamente" className="coming-soon-img"/>
              </div>
              <div className="coming-soon-movie-box">
                <img src={comingSoonMovie} alt="Proximamente" className="coming-soon-img"/>
              </div>
              <div className="coming-soon-movie-box">
                <img src={comingSoonMovie} alt="Proximamente" className="coming-soon-img"/>
              </div>
            </div>
          </div>

          <div className="popular-box">
            <h2 className="popular-title coming-soon-title">
              POPULARES DE LITEFLIX
            </h2>
            <div className="flex-four">
              <div className="popular-movie-box coming-soon-movie-box">
                <img src={popularMovie} alt="Proximamente" className="popular-movie-img"/>
                <div className="hover-items">
                  <div className="fade-shadow fade-shadow-alt"></div>
                  <div className="movie-info">
                  <div className="play-button play-button-alt">
                    <img src={playCircle} alt="Play" className="play"/>
                  </div>
                    <div className="movie-info-name">Stranger Things</div>
                      <div className="match general-info-margin">
                        98% Coincidencia
                      </div>
                    <div className="general-info">
                      <div className="age-restriction general-info-margin">
                        +16
                      </div>
                      <div className="duration general-info-margin">
                        1h 30 min
                      </div>
                    </div>
                    <div className="genre genre-alt">
                      Suspenso
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
              <div className="popular-movie-box coming-soon-movie-box">
                <img src={popularMovie} alt="Proximamente" className="popular-movie-img"/>
              </div>
              <div className="popular-movie-box coming-soon-movie-box">
                <img src={popularMovie} alt="Proximamente" className="popular-movie-img"/>
              </div>
              <div className="popular-movie-box coming-soon-movie-box">
                <img src={popularMovie} alt="Proximamente" className="popular-movie-img"/>
              </div>
            </div>
          </div>

          </div>
      </div>
    </div>
  );
}

export default App;
