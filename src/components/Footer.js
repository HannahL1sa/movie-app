import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>© {currentYear} CinemaLib. All rights reserved</p>
    </footer>
  );
}

export default Footer;
