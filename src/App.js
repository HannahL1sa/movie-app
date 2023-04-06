import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/*import Header from './components/Header'
import Footer from './components/Footer' */
import Home from "./components/Home";
import MovieSearch from "./components/MovieSearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<MovieSearch/>} />
      </Routes>
    </Router>
  ); 

}

export default App;

