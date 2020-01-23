import React, { Component } from "react";
import projects from "../asset/projects";
import Header from "../components/Header";
import "../asset/styles/portfolio.css";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [], visible: 4, increment: 4 }
  }

  componentDidMount() {
    this.setState({ projects: projects.slice(0, this.state.visible) })
  }

  loadMore = () => {
    this.setState({ 
      projects: projects.slice(0, this.state.visible + this.state.increment),
      visible: this.state.visible + this.state.increment
    });
  }

  render() {
    return (
      <div className="app-container">
        <Header />

        <div className="container">
          <div className="portfolio-heading">
            <h2>Portfolio</h2>
            <p>Such Websites, Much Apps, Very WOW!</p>
          </div>
        </div>

        <div className="container">
          {this.state.projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {
          this.state.visible >= projects.length ? null :
          <div className="load-more">
            <button onClick={this.loadMore}>Load More!</button>
          </div>
        }

        <Footer />
      </div>
    );
  }
}

export default Portfolio;
