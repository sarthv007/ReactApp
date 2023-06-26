import React, { useState } from "react";

function useCounter() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((c) => c + 1);
  };

  return [counter, handleIncrement];
}

export default useCounter;
