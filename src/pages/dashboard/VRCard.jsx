import React from "react";
import { useNavigate } from "react-router-dom";

const VRCard = ({ option }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${option.stream}`); // Use appropriate option ID or stream path
  };

  return (
    <div className="vr-card" onClick={handleClick}>
      <img src={option.thumbnail} alt={option.name} />
      <h3>{option.name}</h3>
      <div className="vr-tags">
        {option.tags && option.tags.length > 0 ? (
          option.tags.map((tag, index) => (
            <span key={index} className="vr-tag">
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
