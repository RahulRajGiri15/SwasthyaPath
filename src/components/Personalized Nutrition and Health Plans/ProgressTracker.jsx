import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProgressTracker = ({ userProfile }) => {
  const [weightData, setWeightData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeightData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/weight-data/${userProfile.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch weight data");
        }
        const data = await response.json();
        setWeightData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userProfile && userProfile.id) {
      fetchWeightData();
    }
  }, [userProfile]);

  if (loading) {
    return <div className="text-center mt-10">Loading progress data...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
  }

  const chartData = {
    labels: weightData.map((entry) => entry.date),
    datasets: [
      {
        label: "Weight (kg)",
        data: weightData.map((entry) => entry.weight),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Weight Progress Over Time",
      },
    },
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-5">Progress Tracker</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default ProgressTracker;
