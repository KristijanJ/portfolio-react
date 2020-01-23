import React from "react";
import Header from "../components/Header";
import "../asset/styles/contact.css";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="app-container">
      <Header />

      <div className="container contact">
        <div className="contact-heading">
          <h2>Get in touch</h2>
          <p>Contact the developer!</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
