import { useState } from "react";
import "../css/TicTacToe.css"; 

export default function TicTacToe() {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [turn0, setTurn0] = useState(true);
  const [winner, setWinner] = useState(null);

  const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const handleBoxClick = (index) => {
    if (boxes[index] !== "" || winner) return;

    const newBoxes = [...boxes];
    newBoxes[index] = turn0 ? "0" : "X";
    setBoxes(newBoxes);
    setTurn0(!turn0);

    checkWinner(newBoxes);
  };

  const checkWinner = (newBoxes) => {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (newBoxes[a] && newBoxes[a] === newBoxes[b] && newBoxes[a] === newBoxes[c]) {
        setWinner(newBoxes[a]);
        return;
      }
    }
  };

  const resetGame = () => {
    setBoxes(Array(9).fill(""));
    setTurn0(true);
    setWinner(null);
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="container">
        <div className="game">
          {boxes.map((box, index) => (
            <button
              key={index}
              className="box"
              onClick={() => handleBoxClick(index)}
              disabled={box !== "" || winner !== null}
            >
              {box}
            </button>
          ))}
        </div>
      </div>
      <button id="reset-btn" onClick={resetGame}>
        Reset
      </button>
      {winner && <h2>Winner: {winner}</h2>}
    </div>
  );
}
