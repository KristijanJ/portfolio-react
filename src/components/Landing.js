import React from "react";
import "../asset/styles/landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <p className="frontend">Frontend</p>
      <h1 className="webdev">Web Developer</h1>
      <p className="interests">Code. Food. Movies. Games.</p>
      <div className="buttons">
        <Link className="portfolio" to="/portfolio">
          Portfolio
        </Link>
        <Link className="contact" to="/contact">
          Contact
        </Link>
      </div>
      <div className="social-links">
        <a href="https://www.facebook.com/KIKO246/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/j_kristijan/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com/ChrisKris92" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/kristijan-jovanovski-b10955124/"
          target="_blank" rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/KristijanJ" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}
