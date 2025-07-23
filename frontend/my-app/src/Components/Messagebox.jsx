import React, { useState } from "react";
import "./MessageBox.css";

const MessageBox = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (feedback.trim() !== "") {
      console.log("Feedback Submitted:", { feedback, rating });
      setSubmitted(true);
    } else {
      alert("Please enter your feedback before submitting.");
    }
  };

  return (
    <div className="message-container">
      <h2 className="message-title">User Feedback</h2>
      
      {!submitted ? (
        <>
          <div className="message-box">
            <p className="message-text">
              "We value your opinions! Let us know your thoughts and suggestions to help us improve. Your feedback makes a difference!"
            </p>
          </div>

          <div className="rating-section">
            <p>Rate Us:</p>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= rating ? "selected" : ""}`}
                onClick={() => setRating(star)}
              >
                ⭐
              </span>
            ))}
          </div>

          <textarea
            className="feedback-input"
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />

          <button className="message-button" onClick={handleSubmit}>
            Share Your Feedback
          </button>
        </>
      ) : (
        <p className="thank-you-message">🙏 Thank you for your feedback! We appreciate your time. 😊</p>
      )}
    </div>
  );
};

export default MessageBox;
