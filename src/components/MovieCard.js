import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css';


function MovieCard() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const API_KEY = process.env.REACT_APP_API_KEY;

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

  const handleCardClick = (movie) => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div className="movie-container">
      <div className="header">
        <h1 className="popular">Popular Movies</h1>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="movie-card-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}  onClick={() => handleCardClick(movie)}>
            <img className="movie-card-image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <div className="movie-card-content">
              <div className="movie-title">
                <p>{movie.title}</p>
              </div>
              <div className="movie-rating">
                  <span className="movie-star">&#9733;</span> {movie.vote_average}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieCard;



