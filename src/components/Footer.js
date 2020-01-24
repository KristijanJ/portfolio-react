import React from "react";
import { Link } from "react-router-dom";

// STYLES
import "../asset/styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="links">
        <Link to="/portfolio">Works</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
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
    </footer>
  );
}
