import React, { useState, useEffect } from 'react'
import Scoreboard from './Components/ScoreBoard';
import GameBoard from './Components/GameBoard';

function App() {
  const [cards, setCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
        const data = await response.json();
        console.log("Fetched data: ", data);
        const fetchedCards = data.results.map((pokemon, index) => ({
          id: index + 1,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
        }));
        setCards(fetchedCards);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  }, []);

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      setClickedCards([...clickedCards, id]);
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
    }
  };

  return (
    <div className='App'>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <GameBoard cards={cards} handleCardClick={handleCardClick} />
    </div>
  );
}

export default App;