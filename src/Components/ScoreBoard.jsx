import React from "react";

function Scoreboard({ currentScore, bestScore }) {
    return (
        <div className="scoreboard">
            <h2>Memory Card Game</h2>
            <p>Current Score: {currentScore}</p>
            <p>Best Score: {bestScore}</p>
        </div>
    );
}

export default Scoreboard;