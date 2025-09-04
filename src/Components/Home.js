import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../images/logo.png";
import heroImg from "../images/side-view-hand-with-smartphone-smart-light.webp";
import placeholderImg from "../images/side-view-hand-with-smartphone-smart-light.webp";
import "./Home.css";
import Header from "./Header";
import "../Components/style.css"; // Import the CSS file for styling

export const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="hero-section">
      <Header scrolled={scrolled} />

      {/* Rest of your hero content */}

      {/* Hero Content */}
      <div className="hero-content">
        <div className="image-container">
          <img
            src={heroImg}
            alt="Smart home automation by PAT IoT"
            className="hero-image loaded"
            loading="eager"
            width={1920}
            height={1080}
          />
        </div>

        <div className="hero-text">
          <div class="blur-bg"></div>
          <h1 data-aos="fade-up">
            PAT <span>IoT</span> SOLUTIONS
          </h1>
          <p data-aos="fade-up" data-aos-delay="100">
            PAT redefines home automation with intuitive IoT solutions,
            accessible via our mobile app. Seamlessly control electrical
            appliances from anywhere.
          </p>
          <div>
            <Link to="contact" className="cta-button">
              CONTACT US
            </Link>
          </div>
          <p className="tagline">
            Home automation makes life simpler, safer, and smarter
          </p>
        </div>
      </div>
    </section>
  );
};
