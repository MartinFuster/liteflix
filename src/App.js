import { useEffect, useState } from 'react';
import { useSpring, animated } from "react-spring";
import './App.css';
import Navbar from './components/Navbar';
import NavbarMobile from './components/NavbarMobile';
import play from "./images/play-icon.svg";
import plus from "./images/plus-icon.svg";
import SmallPreview from './components/SmallPreview';
import LargePreview from './components/LargePreview';
import axios from "axios";
import Modal from "./components/Modal";
import liteflix from "./images/liteflix-logo.svg";

function App() {

  const [featuredMovieName, setFeaturedMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [myMovies, setMyMovies] = useState([]);
  const [addMovieActive, setAddMovieActive] = useState(false);

  const addMovieAnimation = useSpring({
    opacity: addMovieActive ? 1 : 0,
    visibility: addMovieActive ? "visible" : "hidden",
  });

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20")
      .then(function (res) {
        // API call to get the featured movie (most current one)
        // if they are the same date i use the one with the best ranking
        const data = res.data;
        let mostCurrentMovie = {};
        let max = 0;
        let votes = 0;
        data.results.forEach(obj => {
          const date = new Date(obj.release_date);
          if (date.valueOf() > max) {
            mostCurrentMovie = obj;
            votes = obj.vote_average;
            max = date.valueOf();
          } else if (date.valueOf() === max) {
            if (obj.vote_average > votes) {
              mostCurrentMovie = obj;
              votes = obj.vote_average;
              max = date.valueOf();
            }
          }
        });
        const title = mostCurrentMovie.original_title;
        const overview = mostCurrentMovie.overview;
        const linkData = mostCurrentMovie.backdrop_path;
        const link = "(https://image.tmdb.org/t/p/original/"+linkData+")";
        const fullLink = "url"+link;
        const home = document.getElementById("home");
        home.style.backgroundImage = fullLink;
        setFeaturedMovieName(title);
        setMovieDescription(overview);
      })
      .catch(function (err) {
        alert("There has been an error.");
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/upcoming?api_key=6f26fd536dd6192ec8a57e94141f8b20")
      .then(function (res) {
        // API call to get the upcoming movies (first 4 movies)
        const data = res.data;
        let upcomingArray = [];
        for (let i = 0; i < 4; i++) {
          upcomingArray = [...upcomingArray, data.results[i]];
        }
        setUpcoming(upcomingArray);
      })
      .catch(function (err) {
        alert("There has been an error.");
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20")
      .then(function (res) {
        // API call to get the popular movies (first 4 movies)
        const data = res.data;
        let popularArray = [];
        for (let i = 0; i < 4; i++) {
          popularArray = [...popularArray, data.results[i]];
        }
        setPopular(popularArray);
      })
      .catch(function (err) {
        alert("There has been an error.");
      });
  }, []);

  useEffect(() => {
    // Getting the localStorage movies and adding them to my movies list
    let newMoviesArray = [];
    for (let i = 0; i < localStorage.length; i++) {
    let newMovie = JSON.parse(localStorage.getItem(localStorage.key(i)));
    newMoviesArray.push(newMovie);
    }
    setMyMovies(newMoviesArray);
  }, []);

  function handleCategoryExit() {
    const categoryExpanded = document.getElementById("categoryExpanded");
    if (categoryExpanded.style.visibility === "visible") {
      categoryExpanded.style.opacity = 0;
      setTimeout(() => {
        categoryExpanded.style.visibility = "hidden";
      }, 200);
    }
  }

  function addMovieOpen() {
    setAddMovieActive(true);
    document.documentElement.style.height = "100vh";
    document.documentElement.style.overflow = "hidden";
  }

  function addMovieExit() {
    setAddMovieActive(false);
    handleCategoryExit();
    document.documentElement.style.height = "100%";
    document.documentElement.style.overflowY = "auto";
  }

  function addToMyMovies(newMovie) {
    setMyMovies([...myMovies, newMovie]);
  }
  window.onload = onLoad;

  function onLoad () {
    document.documentElement.style.height = "100%";
    document.documentElement.style.overflowY = "auto";
    const loadAnimation = document.getElementById("loadAnimation");
    loadAnimation.click();
    loadAnimation.style.opacity = 0;
    setTimeout(() => {
      loadAnimation.style.display = "none";
    }, 800);
  }

  return (
    <div className="App" id="App">
      <div className="home" id="home">
        <div className="featured-img-shadow"></div>
        <div className="mobile-fade"></div>
        <div className="load-animation" id="loadAnimation">
          <img src={liteflix} alt="Liteflix" className="liteflix-loading" id="lifelixLoading"/>
        </div>
        <animated.div className="popup-shadow" style={addMovieAnimation} onClick={() => addMovieExit()}></animated.div>
        <div className="container">
        <Navbar addMovieOpen={addMovieOpen} />
        <NavbarMobile addMovieOpen={addMovieOpen} />
        <Modal addMovieActive={addMovieActive} addMovieExit={addMovieExit} addToMyMovies={addToMyMovies} />
        </div>
          <div className="container align-center-container">
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
                <button className="featured-movie-btn featured-movie-btn-mobile">
                  <img src={plus} alt="Agregar" className="featured-movie-icon"/>
                  {window.innerWidth > 981 ? "Mi Lista" : null} 
                </button>
              </div>
              <div className="featured-movie-resume-box">
                <div className="featured-movie-title-small">
                  Descripción
                </div>
                <div className="featured-movie-text">
                  {movieDescription}
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="recommended">
        <div className="container">
          <div className="coming-soon-box">
            <h2 className="coming-soon-title">
              Próximamente
            </h2>
            <div className="flex-four">
              {upcoming.map((object, i) => {
              const linkData = object.poster_path;
              const link = "https://image.tmdb.org/t/p/original/"+linkData;
              const genreID = object.genre_ids[0];
                return <SmallPreview movie={link} genreID={genreID} title={object.original_title} key={i}/>
              })}
            </div>
          </div>

          <div className="popular-box">
            <h2 className="popular-title coming-soon-title">
              POPULARES DE LITEFLIX
            </h2>
            <div className="flex-four">
            {popular.map((object, i) => {
              const linkData = object.poster_path;
              const link = "https://image.tmdb.org/t/p/original/"+linkData;
              const genreID = object.genre_ids[0];
                return <LargePreview movie={link} genreID={genreID} title={object.original_title} key={i} />
              })}
            </div>
          </div>

          <div className="coming-soon-box">
            {myMovies.length !== 0 ?
            (<h2 className="coming-soon-title">
              Mis películas 
            </h2>) : null}
            <div className="flex-four">
              {
              myMovies.map((object, i) => {
                return <SmallPreview movie={object.movie} customGenre={object.genre} title={object.title} key={i} />
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
