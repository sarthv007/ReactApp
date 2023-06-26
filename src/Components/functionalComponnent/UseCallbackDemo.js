import React, { useCallback } from "react";
import { useState } from "react";
import Todos from "./Todos";

function UseCallbackDemo() {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    setCounter((count) => count + 1);
  };

  const addTodos = useCallback(() => {
    setTodos((t) => [...t, "New Todos"]);
  }, [todos]);

  console.log("Inside useCallbackDemo component");
  return (
    <div>
      <h2>Count: {counter}</h2>
      <button onClick={handleClick}>Increment</button>
      <Todos todos={todos} addTodos={addTodos} />
    </div>
  );
}

export default UseCallbackDemo;
