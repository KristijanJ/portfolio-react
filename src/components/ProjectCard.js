import React from "react";
import "../asset/styles/portfolio.css";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/portfolio/project/${project.id}`} className="project-card">
      <div
        style={{
          background: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingBottom: "56%"
        }}
      ></div>
      <div className="title-wrapper">
        <div className="tech">
          {project.tech.map((tech, i) => {
            return i + 1 >= project.tech.length ? (
              <span key={tech}>{tech} </span>
            ) : (
              <span key={tech}>{tech} | </span>
            );
          })}
        </div>
        <p className="title">{project.title}</p>
      </div>
    </Link>
  );
}
