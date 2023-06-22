import React, { useEffect } from "react";

function EffectHookDemo() {
  useEffect(() => {
    document.title = "Welcome to react!";
  }, []);

  return <div>Effect Hook Demo</div>;
}

export default EffectHookDemo;
