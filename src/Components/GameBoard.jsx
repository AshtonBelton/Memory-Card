import React from "react";
import Card from "./Card";

function GameBoard({ cards, handleCardClick}) {
    return (
        <div className="game-board">
            {cards.map(card => {
                <Card key={card.id} card={card} handleClick={handleCardClick} />
            })}
        </div>
    );
}

export default GameBoard;