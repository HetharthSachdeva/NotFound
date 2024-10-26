// In your main component file, e.g., App.js or the file where you use .awrapper
import React from "react";
import Counter from "./Counter"; // Adjust the path based on your folder structure
import './YourStyles.css'; // Your existing CSS

const YourComponent = () => {
  return (
    <div className="awrapper">
      <div className="box">
        <h1>
          <Counter target={1000} duration={2000} /> Happy Users
        </h1>
        <h3>
          <Counter target={800} duration={2000} /> Successful Projects
        </h3>
        <h3>
          <Counter target={500} duration={2000} /> Total Downloads
        </h3>
      </div>
    </div>
  );
};

export default YourComponent;
