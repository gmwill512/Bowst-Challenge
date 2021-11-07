import React from 'react';
import './card.css';

function Card({ Icon, client, title, description, style }) {
  return (
    <div className="card">
      <div className="icon-container">
        <div className="icon-background" style={{ ...style }}>
          <Icon className="icon" />
        </div>
      </div>
      <div className="card-container">
        <div className="info-container">
          <h5>{client}</h5>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
