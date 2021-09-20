import React, { useContext, useEffect } from "react";

import { GameContext } from "../contexts/gameContext";

export default function Winner() {
  const { whoIsWinner, setWhoIsWinnerWho } = useContext(GameContext);

  //   useEffect(() => {}, whoIsWinner);

  if (!whoIsWinner) return <></>;

  return <p className="winner">{whoIsWinner} Ganhou!!!</p>;
}
