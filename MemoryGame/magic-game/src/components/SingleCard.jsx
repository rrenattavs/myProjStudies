import React from "react";
import "./SingleCard.css";
const SingleCard = () => {
  return (
    <div className="card">
      <img className="front" src={card.src} alt="card front" />
      <img className="back" src="/img/cover.png" alt="card back" />
    </div>
  );
};

export default SingleCard;
