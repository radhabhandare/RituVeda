import React from "react";
import { Link } from "react-router-dom"; 
import "./styles.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="RetuVeda" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/User-profile">User Profile</Link></li>
        <li><Link to="/Blog">Blog</Link></li>  {/* ✅ Fixed Blog Route */}
        <li><Link to="/ContactUs">Contact Us</Link></li>
        <li><Link to="/calendar">Calendar</Link></li> 
        <li><Link to="/product-tracker">Menstrual Product Tracker & Reminder</Link></li>
        
        <li>
  <a href="https://menstrualportal.com/menstrual-awareness/" target="_blank" rel="noopener noreferrer">
    Menstrual Awareness
  </a>
</li>
      </ul>
    </nav>
  );
};

export default Navbar;
