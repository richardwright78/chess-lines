import React, { Component } from "react";
import "./css/main.css";
import board from "./utils/board";

class App extends Component {
  render() {
    const blackRow = rank => <li style={{ color: "white" }}>Black {rank}</li>;
    const whiteRow = rank => <li style={{ color: "white" }}>White {rank}</li>;
    const makeSquares = (rank, firstSquareColour) => {
      const squares = ["a", "b", "c", "d", "e", "f", "g", "h"];
      return squares.map(file => {
        return (
          <li style={{ color: "white" }}>
            {file}
            {rank} {firstSquareColour}
          </li>
        );
      });
    };
    return (
      <div id="container">
        <div id="board">
          {board.map(row => {
            return <ul>{makeSquares(row.rank, row.firstSquareColour)}</ul>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
