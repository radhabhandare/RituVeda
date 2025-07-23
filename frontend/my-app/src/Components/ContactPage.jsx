import React from "react";
import ContactForm from "./ContactForm";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Welcome to our Contact Us page! We appreciate your interest in
          connecting with us. This page serves as a convenient way for you to
          reach out and engage with our team. Whether you have a question, feedback, 
          or simply want to say hello, we encourage you to use the provided contact 
          information or fill out the contact form below.
        </p>
        <p>
          If you want your blog to be published on our website, contact us through mail:  
          <strong> rituveda15@gmail.com</strong>
        </p>
      </div>

      <h2 className="conversation-title">
        <span className="line"></span> <em>Let's Start A Conversation</em>{" "}
        <span className="line"></span>
      </h2>

      
      <ContactForm />
    </div>
  );
};

export default ContactPage;
