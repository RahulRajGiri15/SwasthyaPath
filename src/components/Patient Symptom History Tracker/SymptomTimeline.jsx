
import React from "react";

const SymptomTimeline = ({ symptoms }) => {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Your Symptom Timeline</h2>
      <div className="space-y-4">
        {symptoms.map((symptom, index) => (
          <div key={index} className="flex items-center">
            <div className="flex-shrink-0 w-12 text-sm text-gray-500">
              {new Date(symptom.date).toLocaleDateString()}
            </div>
            <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-500 mx-3"></div>
            <div className="bg-white p-3 rounded shadow flex-grow">
              <h3 className="font-semibold">{symptom.name}</h3>
              <p className="text-sm text-gray-600">
                Severity: {symptom.severity}/10
              </p>
              {symptom.medication && (
                <p className="text-sm text-gray-600">
                  Medication: {symptom.medication}
                </p>
              )}
              {symptom.notes && <p className="text-sm mt-1">{symptom.notes}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SymptomTimeline;
