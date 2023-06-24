import { useState, useEffect, useRef } from "react";

function UseRefDemo2() {
  const [counter, setCounter] = useState(0);
  let interval = useRef(0);

  useEffect(() => {
    interval.current = setInterval(() => {
      setCounter((prevCounter) => counter + prevCounter + 1);
    }, 1000);

    //clean up code
    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  const handleStop = () => {
    clearInterval(interval.current);
  };

  return (
    <>
      <h3>UseRef demo</h3>
      <h3>Counter: {counter}</h3>
      <button onClick={() => handleStop()}>Stop Interval</button>
    </>
  );
}
export default UseRefDemo2;
