
import React, { useState } from "react";
import SpecialistFinder from "./SpecialistFinder";
import ConsultationBooking from "./ConsultationBooking";
import InternationalAccess from "./InternationalAccess";

const TelemedicineApp = () => {
  const [activeTab, setActiveTab] = useState("finder");
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);

  const handleSpecialistSelect = (specialist) => {
    setSelectedSpecialist(specialist);
    setActiveTab("booking");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 rounded-3xl">
        <h1 className="text-2xl font-bold ">
          Telemedicine Marketplace for Niche Specialists
        </h1>
      </header>

      <nav className="bg-white shadow-md rounded-3xl">
        <ul className="flex justify-center p-4">
          <li>
            <button
              onClick={() => setActiveTab("finder")}
              className={`px-4 py-2 ${
                activeTab === "finder"
                  ? "bg-blue-500 text-white"
                  : "text-blue-500"
              } rounded`}
            >
              Find Specialist
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("international")}
              className={`px-4 py-2 ${
                activeTab === "international"
                  ? "bg-blue-500 text-white"
                  : "text-blue-500"
              } rounded ml-4`}
            >
              International Access
            </button>
          </li>
        </ul>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeTab === "finder" && (
          <SpecialistFinder onSpecialistSelect={handleSpecialistSelect} />
        )}
        {activeTab === "booking" && selectedSpecialist && (
          <ConsultationBooking specialist={selectedSpecialist} />
        )}
        {activeTab === "international" && <InternationalAccess />}
      </main>

      
    </div>
  );
};

export default TelemedicineApp;
