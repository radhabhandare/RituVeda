import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Health & Wellness</a></li>
            <li><a href="#">Menstrual Hygiene</a></li>
            <li><a href="#">Educational Articles</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section visitor-counter">
          <h3>Our Visitors</h3>
          <div className="visitor-box">
            <span>0</span><span>0</span><span>5</span><span>2</span><span>7</span>
          </div>
          <p>👤 Users Today: 25</p>
          <p>📊 Total Users: 527</p>
          <p>👁️ Total Views: 8021</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          *The content provided is for informational purposes only and should not replace professional advice.
        </p>
        <p>© 2025 YourWebsite | Powered by TechHive</p>
      </div>
    </footer>
  );
};

export default Footer;
