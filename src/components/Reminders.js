import React, { useState } from "react";

export default function TakeMedsRemindersForm() {
  const [reminderDay, setReminderDay] = useState("");
  const [reminderFrequency, setReminderFrequency] = useState("");

  const handleDayChange = (event) => {
    setReminderDay(event.target.value);
  };

  const handleFrequencyChange = (event) => {
    setReminderFrequency(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, including reminderDay and reminderFrequency values
    // You can use these values in your application logic or send them to a server
  };
  return (
    <form id="takeMedsRemindersForm" onSubmit={handleSubmit}>
      <label htmlFor="reminderDay">Select a Reminder Day:</label>
      <select
        id="reminderDay"
        name="reminderDay"
        value={reminderDay}
        onChange={handleDayChange}
      >
        <option value="">Select Day</option>
        <option value="sunday">Sunday</option>
        <option value="monday">Monday</option>
        {/* Add options for other days */}
      </select>

      <label htmlFor="reminderFrequency">Select Reminder Frequency:</label>
      <select
        id="reminderFrequency"
        name="reminderFrequency"
        value={reminderFrequency}
        onChange={handleFrequencyChange}
      >
        <option value="">Select Frequency</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        {/* Add options for other frequencies */}
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
