import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Stepstrack = () => {
  // Sample data for steps
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // Days of the week
    datasets: [
      {
        label: "Steps",
        data: [5000, 7500, 6700, 8000, 9500, 10000, 8500], // Dummy data for steps
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(199, 199, 199, 0.6)",
        ], // Each bar gets a unique color
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(199, 199, 199, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
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
          text: "Days of the Week",
          color: "#333",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Steps",
          color: "#333",
        },
        suggestedMin: 0,
        suggestedMax: 12000,
      },
    },
  };

  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", color: "#444" }}>Weekly Steps Tracker</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Stepstrack;
