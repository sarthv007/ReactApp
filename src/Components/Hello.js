import React from "react";

function Hello() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { className: "abc", id: "heading" },
      "Hello World!"
    ),
    React.createElement("h1", null, "Hello World!")
  );
}

export default Hello;
