import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Contact.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-page">
        <Header/>
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>Have any questions? We'd love to hear from you.</p>
            <form className="contact-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Full Name" required/>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="you@example.com" required/>

                <label for="message">Message:</label>
                <textarea id="message" name="message" placeholder="Leave a message..." required></textarea>

                <button type="submit" onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact