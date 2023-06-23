import React, { useEffect, useState } from "react";

function HookDemo2() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("counter value changes", counter);
    document.title = `Clicked ${counter} times`;
  }, [counter]);

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={() => setCounter(counter + 1)}>
        Clicked {counter} times
      </button>
    </div>
  );
}

export default HookDemo2;
