import React, { Component } from "react";
import Header from "../components/Header";
import "../asset/styles/portfolio.css";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

class Portfolio extends Component {
  render() {
    const visible = this.props.visible;
    return (
      <div className="app-container">
        <Header />

        <div className="container">
          <div className="portfolio-heading">
            <h2>Portfolio</h2>
            <p>Such Websites, Much Apps, Very WOW!</p>
          </div>
        </div>

        {this.props.projects.length > 0 ? (
          <div className="container">
            {this.props.projects.slice(0, visible).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}

            {visible >= this.props.projects.length ? null : (
              <div className="load-more">
                <button onClick={this.props.loadMore}>Load More!</button>
              </div>
            )}
          </div>
        ) : (
          <div className="container">
            <div className="loading">Loading...</div>
          </div>
        )}

        <Footer />
      </div>
    );
  }
}

export default Portfolio;
