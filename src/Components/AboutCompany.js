import React from "react";
import "./AboutCompany.css";
import companyImage from "../images/teamwork-and-team-building.png";
import { FaBullseye, FaUsers, FaChartLine } from "react-icons/fa";
import { useEffect } from "react";

const AboutCompany = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-company-wrapper">
      <div className="about-company-container">
        <div className="about-hero">
          <div className="hero-content">
            <h1>About PAT IoT Solutions</h1>
            <p className="subtitle">
              Innovating smart home technology for modern living
            </p>
          </div>
        </div>

        <div className="content-section">
          <div className="company-overview">
            <div className="text-content">
              <h2>Who We Are</h2>
              <p>
                PAT IoT Solutions is a Hyderabad-based technology company
                specializing in innovative home automation products. Since our
                founding in 2025, we've been committed to making smart home
                technology accessible, reliable, and easy to use for everyone.
              </p>
            </div>
            <div className="image-content">
              <img
                src={companyImage}
                alt="PAT IoT Solutions office"
                loading="lazy"
              />
            </div>
          </div>

          <div className="key-points">
            <div className="point-card">
              <FaBullseye className="point-icon" />
              <h3>Our Mission</h3>
              <p>
                To simplify home automation through intuitive, affordable IoT
                solutions that enhance everyday living.
              </p>
            </div>

            <div className="point-card">
              <FaUsers className="point-icon" />
              <h3>Our Team</h3>
              <p>
                A passionate group of engineers and designers dedicated to
                creating seamless smart home experiences.
              </p>
            </div>

            <div className="point-card">
              <FaChartLine className="point-icon" />
              <h3>Our Growth</h3>
              <p>
                From startup to industry innovator, serving thousands of happy
                customers across India.
              </p>
            </div>
          </div>

          <div className="coming-soon-notice">
            <h2>Our Full Story</h2>
            <p>
              We're currently preparing a more detailed company history and
              timeline.
            </p>
            <div className="notice-box">
              <p>
                This section will be updated soon with our complete company
                story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
