import React, { useContext } from "react";

import { GameContext } from "../contexts/gameContext";

export default function Player() {
  const { isXNext } = useContext(GameContext);

  return <h1>Player: {isXNext ? "X" : "O"}</h1>;
}
