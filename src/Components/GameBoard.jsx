import React from "react";
import Card from "./Card";
import "../styles/GameBoard.css";

function GameBoard({ cards, handleCardClick}) {
    return (
        <div className="game-board">
            {cards.length > 0 ? (
                cards.map(card => (
                    <Card key={card.id} card={card} handleClick={handleCardClick} />
                ))
            ) : (
                <p>Loading cards...</p>
            )}
        </div>
    );
}

export default GameBoard;