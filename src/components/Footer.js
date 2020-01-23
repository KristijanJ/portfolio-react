import React from 'react';
import { Link } from 'react-router-dom'

// STYLES
import '../asset/styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="links">
        <Link to="/portfolio">Works</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="social-links">
        <Link><i className="fab fa-facebook-f"></i></Link>
        <Link><i className="fab fa-instagram"></i></Link>
        <Link><i className="fab fa-twitter"></i></Link>
        <Link><i className="fab fa-linkedin-in"></i></Link>
        <Link><i className="fab fa-github"></i></Link>
      </div>
    </footer>
  )
}
