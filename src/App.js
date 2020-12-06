import { Suspense, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import featuredImgInit from "./images/destacada-demo-img.jpeg";
import play from "./images/play-icon.svg";
import plus from "./images/plus-icon.svg";
import comingSoonMovie from "./images/proximamente-demo-img.png";
import popularMovie from "./images/populares-demo-img.png";
import SmallPreview from './components/SmallPreview';
import LargePreview from './components/LargePreview';

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
              <SmallPreview movie={comingSoonMovie} genre="Suspenso" title="House of Cards"/>
              <SmallPreview movie={comingSoonMovie} genre="Suspenso" title="House of Cards"/>
              <SmallPreview movie={comingSoonMovie} genre="Suspenso" title="House of Cards"/>
              <SmallPreview movie={comingSoonMovie} genre="Suspenso" title="House of Cards"/>
            </div>
          </div>

          <div className="popular-box">
            <h2 className="popular-title coming-soon-title">
              POPULARES DE LITEFLIX
            </h2>
            <div className="flex-four">
              <LargePreview movie={popularMovie} genre="Suspenso" title="Stranger Things"/>
              <LargePreview movie={popularMovie} genre="Suspenso" title="Stranger Things"/>
              <LargePreview movie={popularMovie} genre="Suspenso" title="Stranger Things"/>
              <LargePreview movie={popularMovie} genre="Suspenso" title="Stranger Things"/>
            </div>
          </div>

          </div>
      </div>
    </div>
  );
}

export default App;
