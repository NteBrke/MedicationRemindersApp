import React, { useState } from "react";

export default function MedInputForm() {
  const [medicationData, setMedicationData] = useState({
    name: "",
    prescriptionDuration: "",
  });

  const handleNameChange = (e) => {
    setMedicationData({
      ...medicationData,
      name: e.target.value,
    });
  };

  const handlePrescriptionDurationChange = (e) => {
    setMedicationData({
      ...medicationData,
      prescriptionDuration: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform actions with medicationData, e.g., store in state, send to API, etc.

    // Access the stored data
    const { name, prescriptionDuration } = medicationData;

    // Log the data (you can perform other actions here)
    console.log("Medication Name:", name);
    console.log("Prescription Duration:", prescriptionDuration);

    setMedicationData({
      name: "",
      prescriptionDuration: "",
    });
  };

  return (
    <form id="medsInfoForm" onSubmit={handleSubmit}>
      <label htmlFor="medNameInput">What's it called?</label>
      <input
        type="text"
        value={medicationData.name}
        onChange={handleNameChange}
        id="medNameInput"
        name="medNameInput"
        required
        placeholder="Enter the name of the drug"
      />
      <label htmlFor="supplyLength">Length of Supply (in days):</label>
      <input
        type="number"
        value={medicationData.prescriptionDuration}
        onChange={handlePrescriptionDurationChange}
        id="supplyLength"
        name="supplyLength"
        required
        max="999"
        placeholder="Enter the length of supply"
      />

      <button type="submit">Submit</button>
    </form>
  );
}
