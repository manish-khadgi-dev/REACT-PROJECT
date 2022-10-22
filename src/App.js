import { useState } from "react";
import "./App.css";
import AnyName from "./Title";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <AnyName />
      <hr />
      <div style={{ fontSize: "2rem" }}>{counter}</div>
      <p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </p>

      {/* <Display />
      <Button /> */}
    </div>
  );
};

export default App;

//component
//state
//props
//hooks
//redux
