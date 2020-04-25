import React from 'react';
import Square from './Square'
import './App.css';

export default class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true
      };
    }
  
    handleClick(i) {
      const { squares, xIsNext } = this.state;
      const clickedSquare = squares.slice();
      if (this.calculateWinner(squares) || clickedSquare[i]) {
        return;
      }
      clickedSquare[i] = xIsNext ? "X" : "O";
      this.setState({ squares: clickedSquare, xIsNext: !xIsNext });
    }
  
    handleReset() {
      this.setState({ squares: Array(9).fill(null), xIsNext: true });
    }

    calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }
  
    render() {
      const { squares, xIsNext } = this.state;
      const winner = this.calculateWinner(squares);  
      return (
        <div  className="container">
          <div className="instructions">
            Next player: {this.state.xIsNext ? "X" : "O"}
          </div>
          <div className="instructions">
            Winner:{winner ? winner : "None"}
          </div>
          <button className="reset-button" onClick={() => this.handleReset()}>
            Reset
          </button>
          <div className="board">
            <div className="board-row">
              <Square value={squares[0]} onClick={() => this.handleClick(0)} />
              <Square value={squares[1]} onClick={() => this.handleClick(1)} />
              <Square value={squares[2]} onClick={() => this.handleClick(2)} />
            </div>
            <div className="board-row">
              <Square value={squares[3]} onClick={() => this.handleClick(3)} />
              <Square value={squares[4]} onClick={() => this.handleClick(4)} />
              <Square value={squares[5]} onClick={() => this.handleClick(5)} />
            </div>
            <div className="board-row">
              <Square value={squares[6]} onClick={() => this.handleClick(6)} />
              <Square value={squares[7]} onClick={() => this.handleClick(7)} />
              <Square value={squares[8]} onClick={() => this.handleClick(8)} />
            </div>
          </div>
        </div>
      );
    }
  }
