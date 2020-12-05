import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import featuredImgInit from "./images/destacada-demo-img.jpeg";
import play from "./images/play-icon.svg";
import plus from "./images/plus-icon.svg";
import comingSoonMovie from "./images/proximamente-demo-img.png";

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
            <div className="coming-soon-title">
              Proximamente
            </div>
            <div className="flex-4">
              <div className="coming-soon-movie-box">
                <img src={comingSoonMovie} alt="Proximamente"/>
              </div>
            </div>
          </div>
          </div>
      </div>
        <div className="container">
          
        </div>
    </div>
  );
}

export default App;
