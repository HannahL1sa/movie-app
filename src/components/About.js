import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "./About.css";

function About() {
  return (
    <div className="about-page">
        <Header/>
        <div className="about-container">
        <h1>About CinemaLib</h1>
        <h2>What We Do</h2>
        <p>At CinemaLib, we're passionate about movies and creating a seamless experience for movie enthusiasts like you. Our app is designed to be your go-to 
          destination for discovering trending movies, exploring your favorite films, and staying up-to-date with the cinematic world.</p>

        <h2>Our Mission</h2>
        <p>Our mission is to provide a user-friendly platform that makes it easy for you to find the latest and greatest movies, 
            as well as delve into the details of your all-time favorites. We believe in the power of storytelling and the impact that movies 
            can have on our lives, and we aim to enhance your movie-watching experience.
        </p>

        <h2>Acknowledgments</h2>
        <p>We extend our gratitude to the developers of The Movie Database (TMDB) for providing an incredible API that enriches our app with up-to-date and 
            detailed movie information, as well as to our supporters and beta testers who have provided valuable feedback.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default About