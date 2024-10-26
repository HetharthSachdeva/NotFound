import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Graph = () => {
  // Sample data simulating heart rate (BPM)
  const data = {
    labels: ["1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "10s"], // Time labels
    datasets: [
      {
        label: "Heart Rate (BPM)",
        data: [72, 75, 70, 74, 77, 76, 73, 78, 72, 75], // Dummy heart rate data
        borderColor: "rgba(255, 99, 132, 1)", // Line color
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Fill color
        pointBackgroundColor: "rgba(255, 99, 132, 1)", // Point color
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        tension: 0.4, // Makes the line curved
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Time (seconds)",
          color: "#666",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "BPM",
          color: "#666",
        },
        suggestedMin: 60,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", color: "#444" }}>Heart Rate Monitor</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
