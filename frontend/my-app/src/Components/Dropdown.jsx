import React from "react";
import "./styles.css";

const Dropdown = ({ items }) => {
  return (
    <ul className="dropdown">
      {items.map((item, index) => (
        <li key={index}><a href="#">{item}</a></li>
      ))}
    </ul>
  );
};

export default Dropdown;
