import React, { useEffect, useRef } from "react";

function UseRefDemo() {
  const inputRef = useRef();

  //   useEffect(() => {
  //     inputRef.current.focus();
  //   }, []);

  const handleClick = () => {
    console.log("inputRef", inputRef);
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => handleClick()}>Focus Input</button>
    </div>
  );
}

export default UseRefDemo;
