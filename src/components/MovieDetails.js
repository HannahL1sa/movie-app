import React , { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import './MovieDetails.css';


function MovieDetails() {
  const { id } = useParams();
  const [trailerKey, setTrailerKey] = useState("");
  const [selectedMovie, setSelectedMovie] = useState();
  const API_KEY = process.env.REACT_APP_API_KEY;

  console.log({id}); // log the value of movieId to the console

    useEffect(() => {
        getMovie();
    }, []);

    const getMovie = () => {
      axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: API_KEY
        }
      })
        .then(response => {
          setSelectedMovie(response.data);
          console.log(setSelectedMovie);
        })
        .catch(error => {
          console.log(error);
        });
      };

    
      const getTrailer = (id) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
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
        <div className="container-horizontal">
          {selectedMovie && (
            <div className="card-horizontal">
              <img className="poster-horizontal" src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} alt={selectedMovie.title} />
              <div className="details-horizontal">
                <h3 className="title-horizontal">{selectedMovie.title}</h3>
                <div className="info-horizontal">
                  <p className="rating-horizontal"><span className="star-horizontal">&#9733;</span>{selectedMovie.vote_average}</p>
                  <p className="genre-horizontal">{selectedMovie.genres.map(genre => genre.name).join(", ")}</p>
                  <p className="length-horizontal">{selectedMovie.runtime} minutes</p>
                </div>
                <p className="release-date-horizontal">Release Date: {selectedMovie.release_date}</p>
                <p className="overview-horizontal">{selectedMovie.overview}</p>
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
        </div>
      );
      
      
      
}

export default MovieDetails;