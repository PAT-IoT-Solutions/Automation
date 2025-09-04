import React from "react";
import "./info.css";
import logo from "../images/logo.png";
import Brochure from "./Brochure.pdf";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaShieldAlt,
} from "react-icons/fa";

const CompanyInfo = () => {
  return (
    <section id="company-info" className="ci-container">
      <div className="ci-inner">
        <div className="ci-content">
          <div className="ci-logo-container">
            <img
              src={logo}
              alt="PAT IoT Solutions Logo"
              className="ci-logo"
              width={180}
              height={60}
              loading="lazy"
            />
          </div>

          <div className="ci-section">
            <h3 className="ci-section-title">Company</h3>
            <div className="ci-links">
              <a
                href={Brochure}
                className="ci-link"
                download="PAT_Home_Automation_Brochure.pdf"
              >
                <FaDownload className="ci-icon" />
                Download Brochure
              </a>
              <Link to="/privacy-policy" className="ci-link">
                <FaShieldAlt className="ci-icon" />
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="ci-section">
            <h3 className="ci-section-title">Contact Us</h3>
            <div className="ci-contact-info">
              <a href="tel:+919030983040" className="ci-contact-link">
                <FaPhone className="ci-icon" />
                <span>+91 90309 83040</span>
              </a>
              <a
                href="mailto:bharath.patiot@gmail.com"
                className="ci-contact-link"
              >
                <FaEnvelope className="ci-icon" />
                <span>bharath.patiot@gmail.com</span>
              </a>
              <a
                href="https://maps.app.goo.gl/2feVz9LNJCrWAxsr8"
                target="_blank"
                rel="noopener noreferrer"
                className="ci-contact-link"
              >
                <FaMapMarkerAlt className="ci-icon" />
                <span>View Location</span>
              </a>
            </div>
          </div>
        </div>

        <div className="ci-footer">
          <p className="ci-copyright">
            © {new Date().getFullYear()} PAT IoT Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
