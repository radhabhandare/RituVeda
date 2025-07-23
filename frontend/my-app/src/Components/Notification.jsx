import React, { useState } from "react";
import "./Notification.css";

const Notifications = () => {
  const [contactMethod, setContactMethod] = useState("email");
  const [contactInfo, setContactInfo] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSendNotification = async () => {
    if (!contactInfo) {
      setStatus("Please enter a valid email or phone number.");
      return;
    }
    
    // Simulated API call
    setTimeout(() => {
      setStatus(`Notification sent via ${contactMethod} to ${contactInfo}`);
    }, 1000);
  };

  return (
    <div className="notifications-container">
      <h2>Mobile Notifications</h2>
      <label>
        Choose Notification Method:
        <select value={contactMethod} onChange={(e) => setContactMethod(e.target.value)}>
          <option value="email">Email</option>
          <option value="sms">SMS</option>
        </select>
      </label>
      <label>
        {contactMethod === "email" ? "Email Address:" : "Phone Number:"}
        <input
          type="text"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
          required
        />
      </label>
      <label>
        Reminder Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your reminder message..."
        />
      </label>
      <button onClick={handleSendNotification}>Send Notification</button>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default Notifications;
