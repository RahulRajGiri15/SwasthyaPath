
import React, { useState } from "react";
import SymptomLogger from "./SymptomLogger";
import SymptomTimeline from "./SymptomTimeline";
import ShareableReport from "./ShareableReport";

const PatientSymptomTracker = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [activeTab, setActiveTab] = useState("logger");

  const addSymptom = (newSymptom) => {
    setSymptoms([...symptoms, { ...newSymptom, date: new Date() }]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 rounded-2xl">
        <h1 className="text-2xl font-bold">Patient Symptom History Tracker</h1>
      </header>
      <nav className="bg-white shadow-md rounded-3xl">
        <ul className="flex justify-center p-4">
          <li>
            <button
              onClick={() => setActiveTab("logger")}
              className={`px-4 py-2 ${
                activeTab === "logger"
                  ? "bg-blue-500 text-white"
                  : "text-blue-500"
              } rounded`}
            >
              Log Symptoms
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("timeline")}
              className={`px-4 py-2 ${
                activeTab === "timeline"
                  ? "bg-blue-500 text-white"
                  : "text-blue-500"
              } rounded ml-4`}
            >
              View Timeline
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("share")}
              className={`px-4 py-2 ${
                activeTab === "share"
                  ? "bg-blue-500 text-white"
                  : "text-blue-500"
              } rounded ml-4`}
            >
              Share Report
            </button>
          </li>
        </ul>
      </nav>
      <main className="container mx-auto px-4 py-8">
        {activeTab === "logger" && <SymptomLogger onLogSymptom={addSymptom} />}
        {activeTab === "timeline" && <SymptomTimeline symptoms={symptoms} />}
        {activeTab === "share" && <ShareableReport symptoms={symptoms} />}
      </main>
      
      
    </div>
  );
};

export default PatientSymptomTracker;
