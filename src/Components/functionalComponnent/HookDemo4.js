import React, { useEffect, useState } from "react";

function HookDemo4() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    //clean up function code
    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return <h3>Counter: {counter}</h3>;
}

export default HookDemo4;
