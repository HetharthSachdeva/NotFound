import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
import { getDocumentIds, getDocumentValues } from "../../config/firebase";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Graph = () => {
  const [labelData, setLabelData] = useState([]);
  const [valueData, setValueData] = useState([]);

  useEffect(() => {
    // Fetch document IDs asynchronously and set them as labels
    const fetchLabels = async () => {
      const labels = await getDocumentIds("Users", "7QhV72jd6Cs1dgE1yzxR", "Biometrics");
      setLabelData(labels);
    };

    fetchLabels();
  
      const fetchValues = async () => { 
      const values = await getDocumentValues("Users", "7QhV72jd6Cs1dgE1yzxR", "Biometrics");
      setValueData(values);
    };
    fetchValues();
  }, []);  

  const data = {
    labels: labelData, 
    datasets: [
      {
        label: "Heart Rate (BPM)",
        data: valueData, // Dummy heart rate data
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
