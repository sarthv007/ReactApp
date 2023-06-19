import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Home Component</h2>
      <button onClick={() => navigate("/orders")}>Place Order</button>
    </div>
  );
}

export default Home;
