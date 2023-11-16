import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MovieCard from './MovieCard';

function Home() {
  return (
    <div className='home'>
      <Header />
      <MovieCard />
      <Footer />
    </div>
  );
}

export default Home;
