import React, { useState } from "react";
import useCounter from "./useCounter";

function HookCounter1() {
  const [counter, handleIncrement] = useCounter();

  return (
    <div>
      <h2>Counter:{counter}</h2>
      <button onClick={handleIncrement}>Increment+</button>
    </div>
  );
}

export default HookCounter1;
