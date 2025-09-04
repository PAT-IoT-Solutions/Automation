import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import aboutImage from "../images/aboutimage2.jpeg"; // Converted to WebP
import "./About.css";

export const About = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/9030983040?text=Hello%20PAT%20IoT%20Solutions",
      "_blank"
    );
  };

  return (
    <div id="about">
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img
                src={aboutImage}
                alt="PAT IoT Team Working"
                width={600}
                height={400}
                loading="lazy"
              />
            </div>

            <div className="about-content">
              <div className="section-heading">
                <h2>About Us</h2>
                <div className="underline"></div>
              </div>

              <p className="about-text">
                PAT IOT creates smart solutions for homes and industries,
                letting you control appliances from your phone. You can even use
                your voice to command them, replacing old-fashioned switches.
                Our team in Hyderabad keeps improving existing products and
                exploring new tech.
              </p>

              <div className="about-actions ">
                <Link
                  to="/aboutcompany"
                  data-aos="zoom-in"
                  className="read-more-btn"
                >
                  Read More
                </Link>

                <button
                  data-aos="zoom-in"
                  className="whatsapp-btn"
                  onClick={handleWhatsAppClick}
                >
                  <FaWhatsapp className="whatsapp-icon" />
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
