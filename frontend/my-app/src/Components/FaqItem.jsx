import React, { useState } from "react";
import "./FaqItem.css";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className={`faq-question ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        {question}
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

export default FaqItem;
