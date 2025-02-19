import React from "react";
import s1 from "../images/curtain-switch.png";
import s2 from "../images/motion-sensor-product.jpg";
import s3 from "../images/ir.jpg";
import "./Products.css";
const Products = () => {
  const services = [
    {
      imgSrc: s1,
      title: "Curtain Controller Switch",
      description:
        "Control curtains via mobile app, voice commands, scheduled timings, or manually with the curtain controller switch",
    },
    {
      imgSrc: s2,
      title: "Motion Sensor",
      description:
        "Automatically turns lights on/off based on movement, ideal for saving energy in corridors and washrooms",
    },
    {
      imgSrc: s3,
      title: "IR-Blaster",
      description:
        "TVs, ACs, and other infrared devices effortlessly using an app or voice commands",
    },
  ];

  return (
    <section id="products" className="service_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Products</h2>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <ServiceBox key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceBox = ({ imgSrc, title, description }) => {
  return (
    <div to="products" className="col-md-6 col-lg-4 mx-auto">
      <div data-aos="zoom-in" className="box">
        <div className="img-box">
          <img src={imgSrc} alt="" />
        </div>
        <div className="detail-box">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
    
  );
};

export default Products;
