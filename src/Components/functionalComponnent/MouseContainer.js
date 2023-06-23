import React from "react";
import { useState } from "react";
import Hook1 from "./Hook1";
import HookDemo3 from "./HookDemo3";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Remove Component</button>
      {display && <HookDemo3 />}
    </div>
  );
}

export default MouseContainer;
