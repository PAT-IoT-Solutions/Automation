import React from "react";
import "./howItWorks.css";
import wifiModuleImage from "../images/work1.png";
import cloudServerImage from "../images/work2.png";
import appControlImage from "../images/work3.png";
import { FaNetworkWired, FaCloud, FaMobileScreen } from "react-icons/fa6";

const SmartSwitchWorkflow = () => {
  const workflowSteps = [
    {
      icon: <FaNetworkWired className="sws-stepVisual" />,
      image: wifiModuleImage,
      heading: "Device Connection",
      details: "Smart switches connect securely to your home WiFi network",
      accentColor: "#4F46E5", // Indigo
    },
    {
      icon: <FaCloud className="sws-stepVisual" />,
      image: cloudServerImage,
      heading: "Cloud Sync",
      details: "Encrypted communication with our secure cloud servers",
      accentColor: "#10B981", // Emerald
    },
    {
      icon: <FaMobileScreen className="sws-stepVisual" />,
      image: appControlImage,
      heading: "App Control",
      details: "Manage devices from anywhere via our intuitive mobile app",
      accentColor: "#EC4899", // Pink
    },
  ];

  return (
    <section className="sws-container" id="product-workflow">
      <div className="sws-inner">
        <header className="sws-header">
          <h2 className="sws-mainHeading">
            System <span>Workflow</span>
          </h2>
          <p className="sws-subHeading">
            Seamless integration from device to cloud to your fingertips
          </p>
        </header>

        <div className="sws-stepsGrid">
          {workflowSteps.map((step, index) => (
            <article
              className="sws-stepCard"
              key={`step-${index}`}
              style={{ "--step-accent": step.accentColor }}
            >
              <span className="sws-stepIndex">0{index + 1}</span>
              <div className="sws-stepIconWrapper">{step.icon}</div>
              <figure className="sws-stepImageFrame">
                <img
                  src={step.image}
                  alt={step.heading}
                  className="sws-stepImage"
                  loading="lazy"
                  width={280}
                  height={180}
                />
              </figure>
              <div className="sws-stepContent">
                <h3 className="sws-stepTitle">{step.heading}</h3>
                <p className="sws-stepDesc">{step.details}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartSwitchWorkflow;
