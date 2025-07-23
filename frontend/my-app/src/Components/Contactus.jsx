import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:rituveda15@gmail.com";
  };

  return (
    <div className="contact-container">
      <h2>Get in Touch</h2>
      <p className="contact-message">
        Have questions or need assistance? Our team is here to help! 
        Reach out to us anytime, and we’ll be happy to assist you.
      </p>

      <div className="contact-details">
        <p>📩 Email: <strong>rituveda15@gmail.com</strong></p>
        <p>📞 Phone: <strong>+91 9876543210</strong></p>
      </div>

      <button className="contact-button" onClick={handleContactClick}>
        Contact Us
      </button>
    </div>
  );
};

export default ContactUs;
