import React from "react";
import curtainSwitch from "../images/curtain-switch-removebg-preview.png";
import motionSensor from "../images/motion-sensor-product-removebg-preview.png";
import irBlaster from "../images/ir-removebg-preview.png";
import "./Products.css";

const SmartHomeProducts = () => {
  const productList = [
    {
      image: curtainSwitch,
      title: "Curtain Controller Switch",
      description:
        "Control curtains via mobile app, voice commands, scheduled timings, or manual switch operation",
      features: [
        "App control",
        "Voice commands",
        "Scheduling",
        "Manual override",
      ],
    },
    {
      image: motionSensor,
      title: "Motion Sensor",
      description:
        "Automatically manages lighting based on movement detection for energy efficiency",
      features: [
        "Auto on/off",
        "Energy saving",
        "Adjustable sensitivity",
        "Discreet design",
      ],
    },
    {
      image: irBlaster,
      title: "IR Blaster",
      description:
        "Control TVs, ACs, and other infrared devices with your smartphone or voice",
      features: [
        "Universal remote",
        "App integration",
        "Voice control",
        "Scene creation",
      ],
    },
  ];

  return (
    <section id="smart-products" className="shp-section">
      <div className="shp-container">
        <header className="shp-header">
          <h2 className="shp-main-title">
            Our <span>Smart Products</span>
          </h2>
          <p className="shp-subtitle">
            Innovative solutions for modern home automation
          </p>
        </header>

        <div className="shp-grid">
          {productList.map((product, index) => (
            <ProductCard
              key={`product-${index}`}
              image={product.image}
              title={product.title}
              description={product.description}
              features={product.features}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ image, title, description, features, index }) => {
  return (
    <article
      className="shp-product-card"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="shp-image-container">
        <img
          src={image}
          alt={title}
          className="shp-product-image"
          loading="lazy"
          width={350}
          height={250}
        />
      </div>
      <div className="shp-content">
        <h3 className="shp-product-title">{title}</h3>
        <p className="shp-product-desc">{description}</p>
        <ul className="shp-feature-list">
          {features.map((feature, i) => (
            <li key={i} className="shp-feature-item">
              <span className="shp-feature-icon">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default SmartHomeProducts;
