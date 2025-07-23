import React, { useState } from "react";
import ProductTracker from "./ProductTracker";
import Reminder from "./Reminder";
import "./Home.css";

const Home = () => {
  const [usageLogs, setUsageLogs] = useState([]);

  const handleLogUsage = (log) => {
    setUsageLogs([...usageLogs, log]);
  };

  return (
    <div className="home-container">
      <h1>Menstrual Product Tracker & Reminder</h1>
      <div className="tracker-section">
        <ProductTracker onLogUsage={handleLogUsage} />
      </div>
      <div className="reminder-section">
        <Reminder usageLogs={usageLogs} />
      </div>
    </div>
  );
};

export default Home;
