import React, { useEffect, useState } from "react";

function MouseDemo() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMouseEvent = (event) => {
    console.log("logging mouse postion");
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      window.addEventListener("mousemove", logMouseEvent);
    }, 1000);

    //cleanup function
    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove");
    };
  }, []);

  return (
    <div>
      Mouse X Position : {x}
      Mouse Y Position : {y}
    </div>
  );
}

export default MouseDemo;
