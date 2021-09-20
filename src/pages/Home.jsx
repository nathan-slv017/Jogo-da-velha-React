import React from "react";
import "./Home.css";

import GameContextProvaider from "../contexts/gameContext";
import Board from "../components/Board";

export default function Home() {
  return (
    <GameContextProvaider>
      <Board />
    </GameContextProvaider>
  );
}
