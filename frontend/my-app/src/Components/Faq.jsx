import React from "react";
import FaqItem from "./FaqItem";
import "./Faq.css";

const faqData = [
  {
    question: "Why do periods happen?",
    answer: "Periods occur due to the shedding of the uterine lining when pregnancy does not happen."
  },
  {
    question: "Why are periods irregular? What are the reasons and how can we prevent it?",
    answer: "Hormonal imbalance, stress, thyroid issues, and PCOS can cause irregular periods. Consulting a gynecologist is advised."
  },
  {
    question: "Sometimes periods last for more than a week. What could be the reason and how to prevent it?",
    answer: "It could be due to hormonal imbalances or medical conditions. Consult a doctor for proper diagnosis and treatment."
  },
  {
    question: "Why does white blood discharge happen?",
    answer: "White discharge is normal and helps clean the vagina. If it has a foul smell or unusual color, consult a doctor."
  },
  {
    question: "What is the reason that growth stops after periods?",
    answer: "Growth depends on genetics and hormones. Menstruation itself does not stop growth but indicates puberty stages."
  },
  {
    question: "Should we take any medicine to stop or regulate periods?",
    answer: "Consult a gynecologist before taking any medication to regulate or stop periods."
  },
  {
    question: "What if someday periods stop?",
    answer: "Periods can stop due to pregnancy, menopause, or medical conditions. Consult a doctor if they stop unexpectedly."
  },
  {
    question: "What is the impact of thyroid on periods?",
    answer: "Thyroid disorders can cause irregular, heavy, or missed periods. A thyroid function test is recommended."
  },
];

const Faq = () => {
  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQ'S ANSWERED BY OUR TEaM</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
