
import React, { useState } from "react";

const ShareableReport = ({ symptoms }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the report to the specified email
    console.log("Sending report to:", email);
    setMessage("Report sent successfully!");
    setEmail("");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Share Your Symptom Report</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">
            Recipient's Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Send Report
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Report Preview</h3>
        <div className="bg-gray-100 p-4 rounded">
          <h4 className="font-semibold">Symptom Summary</h4>
          <ul className="list-disc list-inside">
            {symptoms.map((symptom, index) => (
              <li key={index}>
                {symptom.name} - Severity: {symptom.severity}/10 (
                {new Date(symptom.date).toLocaleDateString()})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShareableReport;
