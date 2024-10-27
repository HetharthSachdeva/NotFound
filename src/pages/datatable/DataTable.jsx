import React from 'react';
import './DataTable.css';
import Sidebar from '../../components/sidebar/Sidebar';

const DataTable = () => {
  const activities = [
    { date: "2024-10-27", activity: "Running", duration: "30 mins", calories: 300, heartRate: 140 },
    { date: "2024-10-26", activity: "Cycling", duration: "45 mins", calories: 400, heartRate: 135 },
    { date: "2024-10-25", activity: "Yoga", duration: "60 mins", calories: 200, heartRate: 110 },
    { date: "2024-10-24", activity: "Walking", duration: "20 mins", calories: 100, heartRate: 120 },
    { date: "2024-10-23", activity: "VR Walking Game", duration: "30 mins", calories: 250, heartRate: 130 },
    { date: "2024-10-22", activity: "AR Gardening Experience", duration: "45 mins", calories: 200, heartRate: 120 },
    { date: "2024-10-21", activity: "VR Puzzle Game", duration: "60 mins", calories: 150, heartRate: 115 },
    { date: "2024-10-20", activity: "VR Dance Party", duration: "40 mins", calories: 350, heartRate: 145 },
    { date: "2024-10-19", activity: "AR Painting", duration: "30 mins", calories: 180, heartRate: 110 },
    { date: "2024-10-18", activity: "VR Memory Game", duration: "25 mins", calories: 100, heartRate: 105 },
    { date: "2024-10-17", activity: "AR Fitness Challenge", duration: "50 mins", calories: 300, heartRate: 150 },
    { date: "2024-10-16", activity: "VR Tai Chi", duration: "30 mins", calories: 200, heartRate: 110 },
    { date: "2024-10-15", activity: "VR Social Interaction", duration: "1 hour", calories: 250, heartRate: 120 },
    { date: "2024-10-14", activity: "AR Storytelling Session", duration: "1 hour", calories: 100, heartRate: 95 },
    { date: "2024-10-13", activity: "VR Chair Yoga", duration: "45 mins", calories: 150, heartRate: 105 },
    { date: "2024-10-12", activity: "AR Nature Walk", duration: "30 mins", calories: 200, heartRate: 125 },
    { date: "2024-10-11", activity: "VR Fitness Adventure", duration: "1 hour", calories: 400, heartRate: 160 },
    { date: "2024-10-10", activity: "AR Trivia Game", duration: "30 mins", calories: 120, heartRate: 100 },
    { date: "2024-10-09", activity: "VR Escape Room", duration: "50 mins", calories: 300, heartRate: 150 },
    { date: "2024-10-08", activity: "AR Dance Class", duration: "1 hour", calories: 350, heartRate: 135 },
  ];
  

  return (
    <div className="container">
      <Sidebar />
      <div className="table-container">
      <table className="activity-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Activity</th>
            <th>Duration</th>
            <th>Calories Burned</th>
            <th>Heart Rate (BPM)</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.date}</td>
              <td>{activity.activity}</td>
              <td>{activity.duration}</td>
              <td>{activity.calories}</td>
              <td>{activity.heartRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    
  );
};

export default DataTable;
