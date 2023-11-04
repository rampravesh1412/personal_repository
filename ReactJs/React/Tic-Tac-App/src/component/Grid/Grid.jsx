import { useState } from "react";
import Card from "../Card/Card";
import isWinner from "../../Helper/checkWinner";
import "./Grid.css";

function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  function play(index) {
    if (turn == true) {
      board[index] = "o";
    } else {
      board[index] = "x";
    }
    const win = isWinner(board, turn ? "o" : "x");
    if (win) {
      setTurn(win);
    }
    setBoard([...board]);
    setTurn(!turn);
  }
  return (
    <div className="grid-wrapper">
      {winner && (
        <>
          <h1 className="turn-highlight">Winner is {winner}</h1>
          <button className="reset">Reset Game</button>
        </>
      )}
      <h1 className="turn-highlight">Current Turn: {turn ? "o" : "x"}</h1>
      <div className="grid">
        {board.map((el, idx) => (
          <Card key={idx} onPlay={play} player={el} index={idx} />
        ))}
      </div>
    </div>
  );
}

export default Grid;
