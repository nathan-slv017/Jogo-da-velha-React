import React, { useContext } from "react";
import t from "prop-types";

import { GameContext } from "../contexts/gameContext";

export default function Square({ value, index }) {
  const {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    whoIsWinner,
    history,
    setHistory,
  } = useContext(GameContext);

  function handleClick() {
    if (whoIsWinner) return;
    if (squares[index]) return;

    const newSquare = [...squares];
    newSquare[index] = isXNext ? "X" : "O";
    setIsXNext(!isXNext);
    setSquares(newSquare);

    setHistory([...history, { isXNext: !isXNext, squares, whoIsWinner }]);
  }

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
}

Square.defaultProps = {
  value: null,
};

Square.prototype = {
  value: t.string,
  index: t.number.isRequired,
};
