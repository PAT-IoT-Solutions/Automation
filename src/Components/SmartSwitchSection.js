import React from "react";
import "./SmartSwitchSection.css";
import smartSwitchImage from "../images/smart-switch.png";
import {
  FaMobileAlt,
  FaWifi,
  FaLightbulb,
  FaHandPointer,
} from "react-icons/fa";

const SmartSwitchSection = () => {
  const features = [
    {
      icon: <FaHandPointer className="feature-icon" size={18} />,
      title: "Touch Control",
      description: "Sleek capacitive touch interface",
    },
    {
      icon: <FaWifi className="feature-icon" size={18} />,
      title: "WiFi Connected",
      description: "Seamless home network integration",
    },
    {
      icon: <FaMobileAlt className="feature-icon" size={18} />,
      title: "Remote Access",
      description: "Control from anywhere via app",
    },
    {
      icon: <FaLightbulb className="feature-icon" size={18} />,
      title: "Energy Efficient",
      description: "Monitor and reduce consumption",
    },
  ];

  return (
    <section id="smart-switch" className="smart-switch-section">
      <div className="container">
        {/* Product Demo */}
        <div className="demo-container">
          <img
            src="https://media.giphy.com/media/WTu5YH9J0kyVtymRIe/giphy.gif"
            alt="Smart Switch Demo"
            className="demo-gif"
            loading="lazy"
          />
        </div>

        {/* Product Content */}
        <div className="content-grid">
          <div className="product-image-container">
            <img
              src={smartSwitchImage}
              alt="Smart WiFi Switch"
              className="product-image"
              loading="lazy"
            />
          </div>

          <div className="product-info">
            <h2 className="product-title">
              Smart <span>WiFi Switches</span>
            </h2>
            <p className="product-description">
              Modernize your home with our elegant touch-controlled WiFi
              switches that blend seamlessly with any decor while providing
              complete home automation control.
            </p>

            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon-wrapper">{feature.icon}</div>
                  <div>
                    <h3 className="feature-title" style={{ color: "black" }}>
                      {feature.title}
                    </h3>
                    <p className="feature-text">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartSwitchSection;
