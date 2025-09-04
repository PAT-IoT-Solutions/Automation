import React from "react";
import "./FeaturesSection.css";

const features = [
  {
    title: "Remote Access",
    description: "Control appliances from anywhere via our mobile app",
    icon: "fa-mobile-alt",
    highlight: "Popular",
  },
  {
    title: "Energy Scheduling",
    description: "Automate geysers & ACs to reduce electricity bills",
    icon: "fa-bolt",
    highlight: "Save 30%+",
  },
  {
    title: "Intrusion Alerts",
    description: "Instant notifications for unauthorized access",
    icon: "fa-bell",
    highlight: "Security",
  },
  {
    title: "No Rewiring",
    description: "Works with existing switches - no extra wiring needed",
    icon: "fa-plug",
    highlight: "Easy Setup",
  },
  {
    title: "Multi-User Control",
    description: "Share access with family members seamlessly",
    icon: "fa-users",
    highlight: "Family",
  },
  {
    title: "Scene Presets",
    description: "One-touch control for multiple devices",
    icon: "fa-sliders-h",
    highlight: "Smart",
  },
  {
    title: "Voice Commands",
    description: "Works with Alexa & Google Assistant",
    icon: "fa-microphone",
    highlight: "Hands-Free",
  },
  {
    title: "Warranty",
    description: "24 months comprehensive device coverage",
    icon: "fa-shield-alt",
    highlight: "Reliable",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            Smart Home <span>Features</span>
          </h2>
          <p className="section-subtitle">
            Transform your living space with our advanced IoT solutions
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              className="feature-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {feature.highlight && (
                <div className="feature-badge">{feature.highlight}</div>
              )}
              <div className="feature-icon">
                <i className={`fa ${feature.icon}`} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
