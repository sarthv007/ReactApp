import React, { useEffect } from "react";

function HookDemo3() {
  useEffect(() => {
    return () => {
      alert("Unmounting compinent");
    };
  }, []);

  return <div>Welcome Hook demo 3 component</div>;
}

export default HookDemo3;
