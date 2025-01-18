import React, { useRef, useEffect } from "react";
import "./SmartSwitchSection.css";
import smartSwitchImage from "../images/smart-switch.png";
const SmartSwitchSection = () => {
  const iframeContainer = useRef(null);

  useEffect(() => {
    if (iframeContainer.current) {
      iframeContainer.current.style.pointerEvents = "none";
    }
  }, []);
  return (
    <section className="smart_switch_section">
      <div className="container">
        <div className="iframe_section">
          <img
            src="https://media.giphy.com/media/WTu5YH9J0kyVtymRIe/giphy.gif"
            alt="Smart Switch Animation"
            width="480"
            height="269"
            className="responsive-image"
          />
        </div>
        <div className="row">
          <div className="col">
            <div className="text_section">
              <h2 className="title">Smart Touch WiFi Switches</h2>
              <p className="description">
                Modernize Your Home...Transform your home with smart touch WiFi
                switches, offering convenience, control, and elegance.
                Experience the future of home automation with these innovative
                devices.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="image_section">
              <img
                src={smartSwitchImage}
                alt="Smart Touch WiFi Switches"
                className="responsive-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartSwitchSection;
