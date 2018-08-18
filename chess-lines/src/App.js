import React, { Component } from "react";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./css/main.css";
import board from "./utils/board";
import Square from "./components/board-components/Square";

class App extends Component {
  render() {
    const makeSquares = rank => {
      const squares = ["a", "b", "c", "d", "e", "f", "g", "h"];
      return squares.map(file => {
        return <Square name={file + rank} />;
      });
    };
    return (
      <div id="container">
        <div id="board">
          {board.map(row => {
            return (
              <div className={`board-row board-row-${row.firstSquareColour}`}>
                {makeSquares(row.rank)}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
