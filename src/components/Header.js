import React from 'react';
import { Link } from 'react-router-dom'

// STYLES
import '../asset/styles/header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="name">
        <Link to="/">Kristijan Jovanovski</Link>
      </div>
      <div className="links">
        <Link to="/portfolio">Works</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  )
}
