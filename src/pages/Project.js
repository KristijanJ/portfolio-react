import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../asset/styles/project.css";

class Project extends Component {
  render() {
    const project = this.props.projects[this.props.match.params.id - 1];

    return (
      <div className="app-container">
        <Header />

        {project ? (
          <div className="container">
            <div className="project-heading">
              <h2>{project.title}</h2>
              <p>Coded with <i className="fas fa-heart" style={{ color: "red" }}></i>!</p>
            </div>

            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>

            <div className="project-details">
              <div className="description">{project.description}</div>
              <div className="tech">
                {project.tech.map((tech, i) => {
                  return i + 1 >= project.tech.length ?
                  (<span key={tech}>{tech} </span>) : (<span key={tech}>{tech} | </span>);
                })}
              </div>
              <div className="buttons">
                <a target="_blank" rel="noopener noreferrer"  href={project.url} className="project">Project</a>
                <a target="_blank" rel="noopener noreferrer" href={project.codeUrl} className="code">Code</a>
              </div>
            </div>

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

export default Project;
