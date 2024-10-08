import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../styles/GameBoard.css";

function GameBoard({ cards, handleCardClick }) {
	const [flipping, setFlipping] = useState(false);
	const [shuffledCards, setShuffledCards] = useState(cards);

	useEffect(() => {
        setShuffledCards(cards);
    }, [cards]);

    const shuffleArray = (array) => {
        let shuffled = array.slice(); 
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const handleShuffle = (cardId) => {
        if (!flipping) {
            setFlipping(true);
            setTimeout(() => {
                setShuffledCards(shuffleArray(cards)); 
                setFlipping(false); 
            }, 1500);
        }
        handleCardClick(cardId); 
    };

	return (
		<div className="game-board">
		{shuffledCards.length > 0 ? (
			shuffledCards.map((card) => (
				<Card key={card.id} card={card} handleClick={handleShuffle} flipping={flipping} />
			))
		) : (
			<p>Loading cards...</p>
		)}
		</div>
	);
}

export default GameBoard;