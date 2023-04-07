import React, { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    searchForMovie(searchQuery);
  };

  const searchForMovie = async (query) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`);
      const data = await response.json();
      const firstResult = data.results[0];
      if (firstResult) {
        const movieId = firstResult.id;
        navigate(`/movies/${movieId}`);
      } else {
        console.log(`No results found for "${query}"`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img className="logo" src={`${process.env.PUBLIC_URL}/popcorn.ico`} alt="Popcorn icon" />
          <h1 className="app-name">CinemaLib</h1>
        </div>
        <form className="search-form" onSubmit={handleSearch}>
          <input type="text" placeholder="Search for a movie..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;

