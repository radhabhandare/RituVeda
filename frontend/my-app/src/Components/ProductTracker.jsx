import React, { useState, useEffect } from "react";
import "./ProductTracker.css";

const ProductTracker = () => {
  const [productType, setProductType] = useState("pad");
  const [usageTime, setUsageTime] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [usageHistory, setUsageHistory] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("usageHistory");
    if (savedData) {
      setUsageHistory(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("usageHistory", JSON.stringify(usageHistory));
  }, [usageHistory]);

  const calculateTimeLeft = (usageTime, duration) => {
    const startTime = new Date();
    const [hours, minutes] = usageTime.split(":").map(Number);
    startTime.setHours(hours, minutes, 0, 0);
    
    const endTime = new Date(startTime.getTime() + duration * 60 * 60 * 1000);
    const now = new Date();

    return Math.max(0, Math.floor((endTime - now) / 60000)); // Remaining time in minutes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!usageTime || !duration) {
      setError("⚠️ Please fill out all fields.");
      return;
    }

    const durationValue = parseInt(duration, 10);
    if (durationValue < 1 || durationValue > 12) {
      setError("⚠️ Duration should be between 1 to 12 hours.");
      return;
    }

    setError("");

    const newEntry = {
      id: Date.now(),
      productType,
      usageTime,
      duration: durationValue,
      timeLeft: calculateTimeLeft(usageTime, durationValue),
    };

    setUsageHistory([...usageHistory, newEntry]);

    if (productType === "pad" && durationValue > 6) {
      setRecommendation("🔴 Consider changing your pad every 4-6 hours.");
    } else if (productType === "tampon" && durationValue > 8) {
      setRecommendation("⚠️ Change your tampon within 4-8 hours to avoid TSS.");
    } else if (productType === "cup" && durationValue > 12) {
      setRecommendation("🩸 Menstrual cups should be emptied every 8-12 hours.");
    } else {
      setRecommendation("");
    }

    setAlerts([...alerts, { id: newEntry.id, message: `⏳ Change your ${productType} soon!` }]);

    setTimeout(() => {
      alert(`🔔 Time to change your ${productType}!`);
      setAlerts(alerts.filter(alert => alert.id !== newEntry.id));
    }, durationValue * 60 * 60 * 1000);

    setUsageTime("");
    setDuration("");
  };

  const handleDelete = (id) => {
    const updatedHistory = usageHistory.filter((item) => item.id !== id);
    setUsageHistory(updatedHistory);
  };

  return (
    <div className="tracker-container">
      <h2>🩸 Product Usage Tracker</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select Product:
          <select value={productType} onChange={(e) => setProductType(e.target.value)}>
            <option value="pad">Sanitary Pad</option>
            <option value="tampon">Tampon</option>
            <option value="cup">Menstrual Cup</option>
          </select>
        </label>

        <label>
          Usage Time:
          <input type="time" value={usageTime} onChange={(e) => setUsageTime(e.target.value)} required />
        </label>

        <label>
          Duration (hours):
          <input type="number" min="1" max="12" value={duration} onChange={(e) => setDuration(e.target.value)} required />
        </label>

        {error && <p className="error-text">{error}</p>}
        {recommendation && <p className="recommendation-text">{recommendation}</p>}

        <button type="submit" className="submit-btn">Log Usage</button>
      </form>

      {alerts.length > 0 && (
        <div className="alert-container">
          <h3>🔔 Upcoming Alerts</h3>
          {alerts.map((alert) => (
            <p key={alert.id} className="alert-text">{alert.message}</p>
          ))}
        </div>
      )}

      {usageHistory.length > 0 && (
        <div className="history-container">
          <h3>📜 Usage History</h3>
          <ul>
            {usageHistory.map((entry) => (
              <li key={entry.id}>
                <strong>{entry.productType}</strong> - {entry.usageTime} ({entry.duration} hrs)
                <button className="delete-btn" onClick={() => handleDelete(entry.id)}>❌ Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductTracker;
