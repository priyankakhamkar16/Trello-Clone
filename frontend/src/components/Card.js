import React from 'react';
import '../styles/Card.css';

const Card = ({ card }) => {
  return (
    <div className="card-container">
      <p>{card.title}</p>
    </div>
  );
};

export default Card;
