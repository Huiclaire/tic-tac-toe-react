// export => make it available to other files
// default => only one default export per file
// function Square({ value }) => Sqaure component can be passed a prop called value.

// -------------------- Passing data thorugh props ---------------------------------------
// 1. create Board component.
// 2. create reusable component Sqaure.
// 3. render Square component in Board component using JSC syntax.
// 4. fill the Square component with an 'X' when you click it.
//    4-1. declare a function 'handleClick' indisde of Square.
//    4-2. add 'onClick' to the props of the button JSX returned from the Square.
// 5. Square component to "remember"(useState) that it got clicked.
//    5-1. store the current value of Square in state, change it when the Square is clicked.
//    5-2. import 'useState' at the top of the file.
//    5-3. remove 'value' prop from the Square component.
//    5-4. add a new line in the start of the 'Square', calls useState and return a state variable 'value'.
//    5-5. remove 'value' prop from Square component created by the Board component.
// 6. change square to display an 'X' when clicked
//    6-1. replace eventhandler with 'setValue('X');

// -------------------- Completing the game --------------------------------------- //
// ----- Lifting state into a parent component (Alternate placing 'X').
// 1. edit the Board component so that it declares a state variable names 'squares'.
// 2. pass the 'value' prop down to each 'Square'.
// 3. edit the 'Square' component to receive the 'value' prop from the Board component.
// 4. change what happens when a 'Sqaure' is clicked.
//    4-1. start with the function 'onSquareClick' that the 'Square' component will call
//         when it is clicked.
//    4-2. add 'onSqaureClick' function to the 'Sqaure' component's props.
//    4-3. connect 'onSqaureClick' prop to a function in the Board component that
//          you will name 'handleClick'.
//    4-4. define the 'handleClick' function that update the 'squares' arrary
//         holding the board's state.
//    4-5. update 'handleClick' to be able to update any square.
//         -> add an argument 'i' to the handleClick function that takes the
//            index of the square to update.
//    4-6. update the other eight squares to call 'handleClick'.
// ----- Lifting state into a parent component (Alternate placing 'O').
// 1. set the first move to be 'X' by default.
// 2. make sure the the square is not overwritten when clicked again.
//    => check if the square already has a X or O, if it is, 'return' in the handleClick
//       function early
// ---- A way to determine a winner.


import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  // 'xIsNext' is a boolean that tracks which player's turn it is. It is initilized
  // to 'true' indicating that player 'x' goes first.
  const [xIsNext, setXIsNext] = useState(true);
  // 'square' represents the 9 squares of the game board.
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i]) {
      return;
    }

    // create a copy of the 'square' array with slice() Array method.
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // calling setSquares function lets React know the state of the component has changed.
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="board-row">
        {/* when the square is clicked, the code after the arrow will run, calling 'handleclick(0) */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
