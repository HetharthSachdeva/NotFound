import React from "react";
import { useNavigate } from "react-router-dom";

const VRCard = ({ option }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (option.Link.startsWith("http://") || option.Link.startsWith("https://")) {
      window.location.href = option.Link;
    } else {
      navigate(`${option.Link}`); // Use appropriate option ID or stream path
    }
  };

  return (
    <div
      className="vr-card"
      onClick={handleClick}
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        margin: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        maxWidth: "300px",
        transition: "transform 0.2s",
      }}
    >
      <img
        src={option.thumbnail}
        alt={option.Name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3 style={{ fontSize: "1.2rem", marginTop: "8px", textAlign: "center" }}>
        {option.Name}
      </h3>
      <div className="vr-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
        {option.Tags && option.Tags.length > 0 ? (
          option.Tags.map((tag, index) => (
            <span
              key={index}
              className="vr-tag"
              style={{
                display: "inline-block",
                padding: "6px 12px",
                backgroundColor: "#f0f0f0",
                borderRadius: "16px",
                color: "#333",
                fontSize: "0.9rem",
                fontWeight: "500",
              }}
            >
              {tag}
            </span>
          ))
        ) : (
          <p>No tags available</p>
        )}
      </div>
    </div>
  );
};

export default VRCard;
