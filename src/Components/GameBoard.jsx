import React, { useState } from "react";
import Card from "./Card";
import "../styles/GameBoard.css";

function GameBoard({ cards, handleCardClick }) {
	const [flipping, setFlipping] = useState(false);
	const [shuffledCards, setShuffledCards] = useState(cards);

	const shuffleArray = (array) => {
		let shuffled = array.slice(); 
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	};

	const handleShuffle = (cardId) => {
		setFlipping(true); 
		setTimeout(() => {
			setShuffledCards(shuffleArray(cards));
			handleCardClick(cardId); 
			setFlipping(false); 
		}, 1000); 
	};


	return (
		<div className="game-board">
		{cards.length > 0 ? (
			cards.map((card) => (
			<Card key={card.id} card={card} handleClick={handleShuffle} flipping={flipping} />
			))
		) : (
			<p>Loading cards...</p>
		)}
		</div>
	);
}

export default GameBoard;