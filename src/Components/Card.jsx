import React, { useState } from "react";
import "../styles/Card.css";

function Card({ card, handleClick }) {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
        setFlipped(true); 
        setTimeout(() => {
          setFlipped(false); 
          handleClick(card.id); 
        }, 800); 
      };
    
    return (
        <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleCardClick}>
          <div className="card-inner">
            <div className="card-front">
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </div>
            <div className="card-back">
              <img src="/Images/pokemoncard.jpeg" alt="Back of Cards" />
            </div>
          </div>
        </div>
    );
}

export default Card;