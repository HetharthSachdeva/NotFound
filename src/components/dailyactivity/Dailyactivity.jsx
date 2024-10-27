import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DailyActivity = () => {
  // Sample data for daily activities
  const data = {
    labels: ["Physical Exercises", "Cognitive Skills", "Social", "Exploration"],
    datasets: [
      {
        label: "Hours Spent",
        data: [8, 1, 3, 2], // Number of hours for each activity
        backgroundColor: [
          "rgba(54, 162, 235, 0.7)",  // Blue for Sleep
          "rgba(255, 99, 132, 0.7)",  // Red for Work
          "rgba(75, 192, 192, 0.7)",  // Teal for Exercise
          "rgba(255, 206, 86, 0.7)",  // Yellow for Leisure
          "rgba(153, 102, 255, 0.7)", // Purple for Meals
          "rgba(201, 203, 207, 0.7)", // Gray for Other
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(201, 203, 207, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw} hours`,
        },
      },
    },
  };

  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", color: "#444" }}>Daily Activity Tracker</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default DailyActivity;