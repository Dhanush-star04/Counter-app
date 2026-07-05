import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <div className="count-display">{count}</div>
      {count === 0 && <p className="limit-message">Minimum limit reached</p>}
      <div className="button-group">
        <button className="btn increment" onClick={handleIncrement}>Increment</button>
        <button className="btn decrement" onClick={handleDecrement}>Decrement</button>
        <button className="btn reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;