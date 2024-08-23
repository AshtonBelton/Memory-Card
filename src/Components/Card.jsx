import React, { useCallback, useState } from "react";
import "../styles/Card.css";

function Card({ card, handleClick }) {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
        setFlipped(true);
        setTimeout(() => {
            setFlipped(false);
            handleClick(card.id);
        }, 600);
    };

    return (
        <div className="card" onClick={() => handleClick(card.id)}>
          <div className="card-inner">
            <div className="card-front">
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </div>
            <div className="card-back">
              <img src="path/to/pokemon-card-back.jpg" alt="Card Back" />
            </div>
          </div>
        </div>
    );



/* 
    return (
        <div className={`card ${flipped ? 'flip' : ''}`} onClick={handleCardClick}>
            <div className="card-inner">
                <div className="card-font">
                    <img src="{card.image}" alt="{card.name}" />
                    <p>{card.name}</p>
                </div>
                <div className="card-back">
                    <img src="../images/pokemoncard.jpeg" alt="Card Back" />
                </div>
            </div>
        </div>
    );
*/
}

export default Card;