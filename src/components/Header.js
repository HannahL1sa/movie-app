import React, { useState } from 'react';
import axios from 'axios';
import './Header.css';
import MovieSearch from './MovieSearch'
import { useNavigate } from 'react-router-dom';


function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();


  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: '16281744c518ab50f70f6802974c80ea',
          query: searchQuery
        }
      });
      setSearchResults(response.data.results);
      console.log(response.data.results);
      console.log(searchResults);
      navigate('/search'); 
    } catch (error) {
      console.error(error);
    }
  }

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
      <MovieSearch search={searchResults} />
    </header>
  );
}

export default Header;
