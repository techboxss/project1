
import React from 'react';
import './CardComponent.css'; 

const CardComponent = ({ logo, name }) => {
  return (
    <div className="card">
      <img src={logo} alt={name} className="card-logo" />
      <h3>{name}</h3>
    </div>
  );
};

export default CardComponent;

