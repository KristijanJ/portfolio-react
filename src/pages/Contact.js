import React from "react";
import Header from "../components/Header";
import "../asset/styles/contact.css";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="app-container">
      <Header />

      <div className="container">

        <div className="contact-heading">
          <h2>Get in touch</h2>
          <p>Contact the developer!</p>
        </div>

        <div className="contact-details">
          <p>Write an email to</p>
          <h3><a href="mailto:kristijan.j92@gmail.com">kristijan.j92@gmail.com</a></h3>
          <span>Ooorr... click on them links in the footer baby!</span>
        </div>

      </div>

      <Footer />
    </div>
  );
}
