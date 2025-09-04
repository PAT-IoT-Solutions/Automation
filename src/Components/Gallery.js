import React, { useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { FaExpand, FaPlay } from "react-icons/fa";
import "./Gallery.css";

// Import optimized images (convert to WebP format)
import galleryImg1 from "../images/gallery-img-2.png";
import galleryImg2 from "../images/curtain-product.jpg";
import galleryImg3 from "../images/gallery-img-4.jpg";
import galleryImg4 from "../images/gallery-img-6.jpg";
import video1 from "../Videos/video3.mp4";
import video2 from "../Videos/video2.mp4";

const SmartGallery = () => {
  const galleryItems = [
    { type: "image", src: galleryImg1, alt: "Smart switch installation" },
    { type: "image", src: galleryImg2, alt: "Curtain controller product" },
    { type: "image", src: galleryImg3, alt: "Home automation setup" },
    { type: "image", src: galleryImg4, alt: "Smart lighting system" },
    { type: "video", src: video1, alt: "Product demonstration video" },
    { type: "video", src: video2, alt: "Installation tutorial" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="smart-gallery" className="sg-container">
      <div className="sg-inner">
        <header className="sg-header">
          <h2 className="sg-title">
            Our <span>Gallery</span>
          </h2>
          <p className="sg-subtitle">
            Explore our smart home solutions in action
          </p>
        </header>

        <div className="sg-grid">
          {galleryItems.map((item, index) => (
            <div
              key={`gallery-item-${index}`}
              className="sg-item"
              onClick={() => openModal(index)}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="sg-media"
                  loading="lazy"
                  width={400}
                  height={300}
                />
              ) : (
                <div className="sg-video-container">
                  <video
                    src={item.src}
                    className="sg-media"
                    muted
                    loop
                    playsInline
                  />
                  <div className="sg-play-overlay">
                    <FaPlay className="sg-play-icon" />
                  </div>
                </div>
              )}
              <div className="sg-overlay">
                {item.type === "image" ? (
                  <FaExpand className="sg-icon" />
                ) : (
                  <FaPlay className="sg-icon" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        open={isModalOpen}
        onClose={closeModal}
        center
        classNames={{
          overlay: "sg-modal-overlay",
          modal: "sg-modal-content",
          closeButton: "sg-close-btn",
        }}
      >
        {galleryItems[activeIndex].type === "image" ? (
          <img
            src={galleryItems[activeIndex].src}
            alt={galleryItems[activeIndex].alt}
            className="sg-modal-media"
          />
        ) : (
          <video
            src={galleryItems[activeIndex].src}
            controls
            autoPlay
            className="sg-modal-media"
          />
        )}
      </Modal>
    </section>
  );
};

export default SmartGallery;
