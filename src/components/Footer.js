import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>© {currentYear} Hannah-Lisa Whittle</p>
    </footer>
  );
}

export default Footer;
