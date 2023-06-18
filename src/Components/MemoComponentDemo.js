import React, { memo } from "react";

function MemoComponentDemo() {
  console.log("React memo demo rendering");
  return <div>Memo Component Demo</div>;
}

export default memo(MemoComponentDemo);
