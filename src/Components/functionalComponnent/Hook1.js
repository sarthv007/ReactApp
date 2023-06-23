import React, { useEffect, useState } from "react";

function Hook1() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (event) => {
    console.log("logging mouse position");
    setX(event.clientX);
    setY(event.clientY);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      window.addEventListener("mousemove", logMousePosition);
    }, 1000);
  }, []);

  return (
    <div>
      Hook X :{x} and Hook Y:{y}
    </div>
  );
}

export default Hook1;
