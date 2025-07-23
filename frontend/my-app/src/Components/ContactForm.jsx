import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatusMessage("⚠️ Please fill in all required fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatusMessage("⚠️ Please enter a valid email address.");
      return;
    }

    console.log("Form Submitted", formData);
    setStatusMessage("✅ Your message has been sent!");
    
    // Clear form after submission
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {statusMessage && <p className="status-message">{statusMessage}</p>}

      <div className="form-group">
        <label>Name *</label>
        <div className="name-inputs">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Email *</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Message *</label>
        <textarea
          name="message"
          placeholder="Write your message here..."
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="submit-btn">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
