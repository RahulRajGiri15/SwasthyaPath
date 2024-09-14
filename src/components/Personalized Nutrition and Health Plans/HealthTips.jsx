import React, { useState, useEffect } from "react";

const HealthTips = () => {
  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHealthTip = async () => {
      try {
        const response = await fetch("/api/health-tip");
        if (!response.ok) {
          throw new Error("Failed to fetch health tip");
        }
        const data = await response.json();
        setTip(data.tip);
      } catch (error) {
        console.error("Error fetching health tip:", error);
        setTip("Stay hydrated and eat a balanced diet for optimal health.");
      } finally {
        setLoading(false);
      }
    };

    fetchHealthTip();
  }, []);

  if (loading) {
    return <div className="text-center mt-8">Loading health tip...</div>;
  }

  return (
    <div
      className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mt-8"
      role="alert"
    >
      <p className="font-bold">Health Tip of the Day</p>
      <p>{tip}</p>
    </div>
  );
};

export default HealthTips;
