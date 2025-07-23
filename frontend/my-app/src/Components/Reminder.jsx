import React, { useEffect, useState } from "react";
import "./Reminder.css";

const Reminder = ({ usageLogs }) => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const newReminders = usageLogs.map((log) => {
      let reminderTime = new Date();
      reminderTime.setHours(
        reminderTime.getHours() + parseInt(log.duration, 10)
      );
      return {
        product: log.productType,
        reminder: `Replace ${log.productType} at ${reminderTime.toLocaleTimeString()}`,
      };
    });
    setReminders(newReminders);
  }, [usageLogs]);

  return (
    <div className="reminder-container">
      <h2>Reminders</h2>
      <ul>
        {reminders.map((rem, index) => (
          <li key={index}>{rem.reminder}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reminder;
