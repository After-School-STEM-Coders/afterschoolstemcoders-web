import { useState } from "react";

// This is an example of a component. Components must be capitalized.
// Here I named this component 'Example1' which is also the name of the file (important).

export const Example2 = () => {
  // count is a 'state' (think of a varible)
  // count can only be changed using setCount
  // count is initially set to 0
  const [count, setCount] = useState(0);

  // handleClick gets called when the button is pressed
  const handleClick = () => {
    // here the state of 'count' is increased by 1
    setCount(count + 1);
  };

  return (
    <div>
      <div className="text-center">Example 2</div>
      {/* variables/states must be wrapped in {} */}
      <div>Count = {count}</div>
      <button onClick={handleClick}>click me!</button>
    </div>
  );
};
