import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { GameContext } from "../contexts/gameContext";

export default function TheHistory() {
  const { history, setHistory, setIsXNext, setSquares, setWhoIsWinner } =
    useContext(GameContext);

  function handleHistory(index) {
    const newHistory = [...history];
    newHistory.splice(index, Number.MAX_SAFE_INTEGER);
    setHistory(newHistory);

    setSquares(history[index].squares);
    setIsXNext(!history[index].isXNext);
    setWhoIsWinner(history[index].whoIsWinner);
  }

  return (
    <div>
      {history.map((value, index) => (
        <div key={uuidv4()} className="history">
          <button type="button" onClick={() => handleHistory(index)}>
            Voltar para a jogada {index + 1}
          </button>
        </div>
      ))}
    </div>
  );
}
