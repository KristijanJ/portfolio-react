import React from 'react';
import '../asset/styles/landing.css'
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="landing">
      <p className="frontend">Frontend</p>
      <h1 className="webdev">Web Developer</h1>
      <p className="interests">Code. Food. Movies. Games.</p>
      <div className="buttons">
        <Link className="portfolio" to="/portfolio">Portfolio</Link>
        <Link className="contact" to="/contact">Contact</Link>
      </div>
      <div className="social-links">
        <Link><i className="fab fa-facebook-f"></i></Link>
        <Link><i className="fab fa-instagram"></i></Link>
        <Link><i className="fab fa-twitter"></i></Link>
        <Link><i className="fab fa-linkedin-in"></i></Link>
        <Link><i className="fab fa-github"></i></Link>
      </div>
    </div>
  )
}
