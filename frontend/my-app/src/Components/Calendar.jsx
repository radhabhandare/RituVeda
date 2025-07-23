import React, { useState, useEffect } from "react";
import "./Calendar.css";

const CycleTracker = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [nextPeriodDate, setNextPeriodDate] = useState(null);
  const [ovulationDate, setOvulationDate] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (lastPeriodDate) {
      const nextDate = new Date(lastPeriodDate);
      nextDate.setDate(nextDate.getDate() + parseInt(cycleLength, 10));
      setNextPeriodDate(nextDate.toDateString());

      // Ovulation Calculation (Usually occurs around day 14 of cycle)
      const ovulation = new Date(lastPeriodDate);
      ovulation.setDate(ovulation.getDate() + 14);
      setOvulationDate(ovulation.toDateString());

      setError(""); // Clear error on valid input
    }
  }, [lastPeriodDate, cycleLength]);

  // Handle input validation
  const handleCycleLengthChange = (e) => {
    const value = e.target.value;
    if (value < 21 || value > 35) {
      setError("Cycle length must be between 21 and 35 days.");
    } else {
      setError("");
    }
    setCycleLength(value);
  };

  return (
    <div className="cycle-tracker-container">
      <h2>📅 Menstrual Cycle Tracker</h2>
      <form>
        <label>
          Last Period Date:
          <input
            type="date"
            value={lastPeriodDate}
            onChange={(e) => setLastPeriodDate(e.target.value)}
            required
          />
        </label>
        <label>
          Cycle Length (days):
          <input
            type="number"
            min="21"
            max="35"
            value={cycleLength}
            onChange={handleCycleLengthChange}
            required
          />
        </label>
        {error && <p className="error-text">⚠️ {error}</p>}
      </form>

      {nextPeriodDate && !error && (
        <div className="results">
          <p>📍 Next expected period: <strong>{nextPeriodDate}</strong></p>
          <p>🌿 Estimated ovulation date: <strong>{ovulationDate}</strong></p>
        </div>
      )}
    </div>
  );
};

export default CycleTracker;
