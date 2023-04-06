/*
import React , { useEffect, useState }from 'react';
import axios from "axios";
import './MovieCard.css';
import MovieSearch from './MovieSearch';


function MovieCard() {
  const [movies, setMovies] = useState([]);
  const [trailerKey, setTrailerKey] = useState("");

  useEffect(() => {
    getMovie();
    getTrailer();
  }, []);

  const getMovie = () => {
    axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: '16281744c518ab50f70f6802974c80ea'
      }
    })
    .then(response => {
      setMovies(response.data.results);
    })
    .catch(error => {
      console.log(error);
    });
  };

  const getTrailer = (movieId) => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, {
      params: {
        api_key: '16281744c518ab50f70f6802974c80ea'
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
    <div className="movie-container">
      <h1 className="popular">Popular Movies</h1>
    {movies.map((movie) => (
    <div className="movie-card" key={movie.id}>
      <img className="movie-card-image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <div className="movie-card-details">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-rating"><span className="star">&#9733;</span> {movie.vote_average}  {movie.vote_count} votes</p>
        <p className="movie-release-date">Release Date: {movie.release_date}</p>
        <p className="movie-text">{movie.overview}</p>
      </div>
      <div className="movie-card-footer">
        <button className="movie-card-button" onClick={() => getTrailer(movie.id)}>&#9658; Watch Trailer</button>
      </div>
      {trailerKey && (
        <iframe  src={`https://www.youtube.com/embed/${trailerKey}`} title={movie.title} className="movie-card-iframe" frameBorder="0" allowFullScreen></iframe>
      )}
    </div>
    ))}
    </div>
  );
}

export default MovieCard;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MovieCard.css';


const API_KEY = '16281744c518ab50f70f6802974c80ea';


function MovieCard() {
  const [movies, setMovies] = useState([]);
  const [trailerKey, setTrailerKey] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: API_KEY
        }
      });
      setMovies(response.data.results);
    } catch (error) {
      setError('Failed to fetch popular movies');
    }
  };

  const getTrailer = async (movieId) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, {
        params: {
          api_key: API_KEY
        }
      });
      const trailers = response.data.results.filter((result) => result.type === 'Trailer');
      if (trailers.length > 0) {
        setTrailerKey(trailers[0].key);
      }
    } catch (error) {
      setError('Failed to fetch the trailer');
    }
  };

  return (
    <div className="movie-container">
      <h1 className="popular">Popular Movies</h1>
      {error && <p className="error">{error}</p>}
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <img className="movie-card-image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <div className="movie-card-details">
            <h3 className="movie-card-title">{movie.title}</h3>
            <p className="movie-rating">
              <span className="star">&#9733;</span> {movie.vote_average} {movie.vote_count} votes
            </p>
            <p className="movie-release-date">Release Date: {movie.release_date}</p>
            <p className="movie-text">{movie.overview}</p>
          </div>
          <div className="movie-card-footer">
            <button className="movie-card-button" onClick={() => getTrailer(movie.id)} aria-label={`Watch trailer of ${movie.title}`}>
              &#9658; Watch Trailer
            </button>
          </div>
          {trailerKey && (
            <iframe
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title={`${movie.title} trailer`}
              className="movie-card-iframe"
              frameBorder="0"
              allowFullScreen
              aria-label={`${movie.title} trailer`}
            ></iframe>
          )}
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MovieCard.css';

const API_KEY = '16281744c518ab50f70f6802974c80ea';

function MovieCard() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: API_KEY
        }
      });
      setMovies(response.data.results);
    } catch (error) {
      setError('Failed to fetch popular movies');
    }
  };

  return (
    <div className="movie-container">
      <div className="header">
        <h1 className="popular">Popular Movies</h1>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="movie-card-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img className="movie-card-image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <div className="movie-card-content">
              <h3 className="movie-card-title">{movie.title}</h3>
              <p className="movie-rating">
                <span className="star">&#9733;</span> {movie.vote_average} ({movie.vote_count} votes)
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieCard;



