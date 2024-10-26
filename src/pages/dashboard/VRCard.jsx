import React from "react";
import { useNavigate } from "react-router-dom";

const VRCard = ({ option }) => {
  const history = useNavigate();

  const handleClick = () => {
    history.push(`/vr-experience/${option.id}`);
  };

  return (
    <div className="vr-card" onClick={handleClick}>
      <img src={option.image} alt={option.name} />
      <h3>{option.name}</h3>
      <p>{option.description}</p>
    </div>
  );
};

export default VRCard;
