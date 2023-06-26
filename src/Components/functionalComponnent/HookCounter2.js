import React, { useState } from "react";
import useCounter from "./useCounter";

function HookCounter2() {
  const [counter, handleIncrement] = useCounter();

  return (
    <div>
      <h2 onMouseEnter={handleIncrement}>Counter:{counter}</h2>
    </div>
  );
}

export default HookCounter2;
