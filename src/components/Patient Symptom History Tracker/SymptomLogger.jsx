
import React, { useState } from "react";

const SymptomLogger = () => {
  const [symptom, setSymptom] = useState("");
  const [severity, setSeverity] = useState(1);
  const [medication, setMedication] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Logged:", { symptom, severity, medication, notes });
    // Reset form
    setSymptom("");
    setSeverity(1);
    setMedication("");
    setNotes("");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Log Your Symptoms</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="symptom" className="block mb-1">
            Symptom
          </label>
          <input
            type="text"
            id="symptom"
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="severity" className="block mb-1">
            Severity (1-10)
          </label>
          <input
            type="number"
            id="severity"
            min="1"
            max="10"
            value={severity}
            onChange={(e) => setSeverity(Number(e.target.value))}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="medication" className="block mb-1">
            Medication (if any)
          </label>
          <input
            type="text"
            id="medication"
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="notes" className="block mb-1">
            Additional Notes
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-2 border rounded"
            rows="3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Log Symptom
        </button>
      </form>
    </div>
  );
};

export default SymptomLogger;
