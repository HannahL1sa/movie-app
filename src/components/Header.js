import React, { useState } from 'react';
import './Header.css';
import { useNavigate, Link } from 'react-router-dom';

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
    <header className="header-container">
      <nav className="nav-bar">
        <div className="logo-container">
           {/* Wrap the image with a Link to the home page */}
           <Link to="/">
            <img className="logo" src={`${process.env.PUBLIC_URL}/popcorn.ico`} alt="Popcorn icon" />
          </Link>
          <h1 className="app-name">CinemaLib</h1>
        </div>
          <form className="search-form" onSubmit={handleSearch}>
            <input type="text" placeholder="Search for a movie..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button className="search-btn" type="submit">Search</button>
          </form>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
           <Link to="/contact">Contact</Link>
          </div>
        </nav>
    </header>
  );
}

export default Header;

