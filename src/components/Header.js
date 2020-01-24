import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// STYLES
import '../asset/styles/header.css'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { openLinks: '' }
  }

  openLinks = () => {
    this.state.openLinks !== 'open-links' ? 
    this.setState({ openLinks: 'open-links' }) :
    this.setState({ openLinks: '' });
  }

  render() {
    return (
      <header className="header">
        <div className="name">
          <Link to="/">Kristijan Jovanovski</Link>
        </div>
        <i 
          className="fas fa-bars hamburger" 
          onClick={this.openLinks}
        ></i>
        <div className={`links ${this.state.openLinks}`}>
          <Link to="/portfolio">Works</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </header>
    );
  }
}
