import React from "react";
import "../styles/Card.css";

function Card({ card, handleClick, flipping }) {
    const handleCardClick = () => {
        handleClick(card.id);
    };
    
    return (
        <div className={`card ${flipping ? "flip-360" : ""}`} onClick={handleCardClick}>
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