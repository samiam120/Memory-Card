import "./App.css";
import { Scoreboard } from "./components/Scoreboard";
import { CardGrid } from "./components/CardGrid";
import "./index.css";
import { useState } from "react";
function App() {
  const [currentScore, updateCurrentScore] = useState(0);
  const [bestScore, updateBestScore] = useState(0);

  const [clickedCards, updateClickedCards] = useState([]);

  return (
    <>
      <div className="app-container">
        <h1>Memory Game</h1>
        <Scoreboard bestScore={bestScore} currentScore={currentScore} />
        <CardGrid
          clickedCards={clickedCards}
          updateClickedCards={updateClickedCards}
          updateCurrentScore={updateCurrentScore}
          updateBestScore={updateBestScore}
          bestScore={bestScore}
        />
      </div>
    </>
  );
}

export default App;
