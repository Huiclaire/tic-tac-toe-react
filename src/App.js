// export => make it available to other files
// default => only one default export per file
// function Square({ value }) => Sqaure component can be passed a prop called value.

// 1. create Board component.
// 2. create reusable component Sqaure.
// 3. render Square component in Board component using JSC syntax.
// 4. fill the Square component with an 'X' when you click it.
//    4-1. declare a function 'handleClick' indisde of Square.
//    4-2. add 'onClick' to the props of the button JSX returned from the Square.
// 5. Square component to "remember"(useState) that it got clicked.
//    5-1. store the current value of Square in state, change it when the Square is clicked.
//    5-2. import 'useState' at the tope of the file.
//    5-3. remove 'value' prop from the Square component.
//    5-4. add a new line in the start of the 'Square', calls useState and return a state variable 'value'.
//    5-5. remove 'value' prop from Square component created by the Board component.
// 6. change square to display an 'X' when clicked
import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return(
    <button
      className="square"
      onClick={handleClick}
    >
    {value}
    </button>
  )
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
