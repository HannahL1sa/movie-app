import React , { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import './MovieDetails.css';
import Header from './Header';
import Footer from './Footer';


function MovieDetails() {
  const { id } = useParams();
  const [trailerKey, setTrailerKey] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const calendar = require('../images/calendar.png');
  const time = require('../images/time.png');
  const star = require('../images/star.png');
  const genre = require('../images/genre.png');

  
  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: {
            api_key: API_KEY
          }
        });
        setSelectedMovie(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovie();
  }, [id, API_KEY]);


  const getTrailer = (id) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
      params: {
        api_key: API_KEY
      }
    })
    .then(response => {
      const trailers = response.data.results.filter(result => result.type === "Trailer");
      if (trailers.length > 0) {
        setTrailerKey(trailers[0].key);
      }
    })
    .catch(error => {
      console.log(error);
    });
  };


  return (
  <div className="container-horizontal">
    <Header />
    {selectedMovie && (
    <div className="card-horizontal">
      <img className="poster-horizontal" src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} alt={selectedMovie.title} />
      <div className="details-horizontal">
        <h3 className="title-horizontal">{selectedMovie.title}</h3>
        <div className="info-horizontal">
          <div className="info-pair"> 
            <img src={calendar} className="calendar" alt="calendar" />
            <p className="release-date-horizontal">{selectedMovie.release_date && new Date(selectedMovie.release_date).getFullYear()}</p>
          </div>
          <div className="info-pair">
            <img src={genre} className="genre" alt="genre" />
            <p className="genre-horizontal">{selectedMovie.genres.slice(0, 3).map(genre => genre.name).join(", ")}</p>
          </div>
          <div className="info-pair">
            <img src={time} className="time" alt="time" />
            <p className="length-horizontal">{Math.floor(selectedMovie.runtime / 60)}h {selectedMovie.runtime % 60}m</p>
          </div>
          <div className="info-pair">
            <img src={star} className="star" alt="star" />
            <p className="rating-horizontal">{selectedMovie.vote_average.toFixed(1)}</p>
          </div>
        </div>
        <div className="overview-horizontal">
          <p className="overview-title">SYNOPSIS</p>
          <p className="overview-info">{selectedMovie.overview}</p>
        </div>
        <div className="footer-horizontal">
          <button className="button-horizontal" onClick={() => getTrailer(selectedMovie.id)} aria-label={`Watch trailer of ${selectedMovie.title}`}>&#9658; Watch Trailer</button>
        </div>
        {trailerKey && (
          <iframe 
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title={`${selectedMovie.title} trailer`}
            className="iframe"
            frameBorder="0"
            allowFullScreen
            aria-label={`${selectedMovie.title} trailer`}
        ></iframe>
      )}
        </div>
        </div>
        )}
        <Footer />
        </div>
  );
       
}

export default MovieDetails;