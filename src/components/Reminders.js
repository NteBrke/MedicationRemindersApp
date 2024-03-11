import React, { useState } from "react";

export default function TakeMedsRemindersForm() {
  const [startDate, setStartDate] = useState("");
  const [frequencyValue, setFrequencyValue] = useState("");
  const [frequencyUnit, setFrequencyUnit] = useState("");

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleFrequencyValueChange = (event) => {
    setFrequencyValue(event.target.value);
  };

  const handleFrequencyUnitChange = (event) => {
    setFrequencyUnit(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, including startDate, frequencyValue, and frequencyUnit values
    // You can use these values in your application logic or send them to a server
  };

  return (
    <form id="takeMedsRemindersForm" onSubmit={handleSubmit}>
      <label htmlFor="startDate">Select Start Date:</label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={startDate}
        onChange={handleStartDateChange}
      />

      <label htmlFor="frequencyValue">Enter Frequency Value:</label>
      <input
        type="number"
        id="frequencyValue"
        name="frequencyValue"
        value={frequencyValue}
        onChange={handleFrequencyValueChange}
      />

      <label htmlFor="frequencyUnit">Select Frequency Unit:</label>
      <select
        id="frequencyUnit"
        name="frequencyUnit"
        value={frequencyUnit}
        onChange={handleFrequencyUnitChange}
      >
        <option value="">Select Unit</option>
        <option value="hours">Hours</option>
        <option value="days">Days</option>
        <option value="weeks">Weeks</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
