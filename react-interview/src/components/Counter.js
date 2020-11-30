import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div className="counter">
        <div className="column">
          <p>{counter}</p>
          <button onClick={() => setCounter(counter + 1)}>Increase</button>
          <button onClick={() => setCounter(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
