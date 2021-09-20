import React, { useContext, useEffect } from "react";
import { v4 } from "uuid";

import { GameContext } from "../contexts/gameContext";
import calculateWinner from "../utils/calculateWinner";

import Player from "./Player";
import Square from "./Square";
import Reset from "./Reset";
import Winner from "./Winner";
import TheHistory from "./TheHistory";

export default function Board() {
  const { squares, setWhoIsWinner } = useContext(GameContext);

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setWhoIsWinner(winner);
    }
  }, squares);

  return (
    <div className="board-container">
      <Player />
      <Winner />
      <Reset />
      <div className="board">
        {squares.map((value, index) => (
          <Square value={value} index={index} key={v4()} />
        ))}
      </div>
      <TheHistory />
    </div>
  );
}
