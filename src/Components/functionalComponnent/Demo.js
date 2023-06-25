import React, { useState } from "react";

function Demo() {
  const [message, setMessage] = useState("Welcome to react hooks");
  return <h3>{message}</h3>;
}

export default Demo;
