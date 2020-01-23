import React from "react";
import Header from "../components/Header";
import "../asset/styles/about.css";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="app-container">
      <Header />

      <div className="container">
        <div className="about-heading">
          <h2>About me</h2>
          <p>Meet the developer!</p>
        </div>
      </div>

      <div className="container about">
        <p className="about-me">
          Hi! I'm Kristijan, a 27 y/o Frontend Web Developer from Skopje
          Macedonia. I have a passion for web development and love to create
          apps and websites. I am a motivated and ambitious person with
          excellent communication and interpersonal skills. I continuously
          strive to learn new skills and invest in professional and personal
          development.
        </p>
        <div className="skills">
          <h2>TECH SKILLS</h2>
          <p>
            GIT | HTML | CSS | Flexbox | Grid | JavaScript | ReactJS | Redux
          </p>
        </div>
        <div className="education">
          <h2>EDUCATION</h2>
          <div className="school">
            <div className="name">JavaScript Basics</div>
            <div className="place">Seavus, Skopje</div>
            <div className="date">July 2018 - August 2018</div>
          </div>
          <div className="school">
            <div className="name">ReactJS</div>
            <div className="place">Creatuve Hub, Skopje</div>
            <div className="date">February 2018 - April 2018</div>
          </div>
          <div className="school">
            <div className="name">JavaScript Academy</div>
            <div className="place">Semos Education, Skopje</div>
            <div className="date">October 2019 - April 2020</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
