import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import {
  FaPaperPlane,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactForm = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(formRef.current);
      const fromName = formData.get("from_name");
      const phone = formData.get("phone");
      const email = formData.get("from_email");
      const message = formData.get("message");

      if (!fromName || !phone || !email || !message) {
        throw new Error("Please fill out all required fields");
      }

      await emailjs.sendForm(
        "service_5z3p4q1",
        "template_w1ejqkw",
        formRef.current,
        "8hMqKfWh1Q_BkPeUt"
      );

      toast.success("Your message has been sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="cf-container">
      <div className="cf-inner">
        <div className="cf-header">
          <h2 className="cf-title">
            Get In <span style={{ color: " #2563eb" }}>Touch</span>
          </h2>
          <p className="cf-subtitle">We'd love to hear from you</p>
        </div>

        <div className="cf-content">
          <div className="cf-form-wrapper">
            <form ref={formRef} onSubmit={sendEmail} className="cf-form">
              <div className="cf-form-group">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="cf-input"
                  required
                />
              </div>
              <div className="cf-form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="cf-input"
                  required
                />
              </div>
              <div className="cf-form-group">
                <input
                  type="email"
                  name="from_email"
                  placeholder="Email Address"
                  className="cf-input"
                  required
                />
              </div>
              <div className="cf-form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="cf-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="cf-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane className="cf-submit-icon" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="cf-info-section">
            <div className="cf-info-card">
              <div className="cf-info-icon">
                <FaPhone />
              </div>
              <div className="cf-info-content">
                <h3>Phone</h3>
                <p>+91 90309 83040</p>
              </div>
            </div>
            <div className="cf-info-card">
              <div className="cf-info-icon">
                <FaEnvelope />
              </div>
              <div className="cf-info-content">
                <h3>Email</h3>
                <p>bharath.patiot@gmail.com</p>
              </div>
            </div>
            <div className="cf-info-card">
              <div className="cf-info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="cf-info-content">
                <h3>Address</h3>
                <p>
                  D-2, 3rd Floor, CMC Layout, Pearl Village Rd, Kondapur,
                  Hyderabad, Telangana – 500084
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
