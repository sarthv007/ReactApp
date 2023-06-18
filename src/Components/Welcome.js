import React from "react";

function Welcome(props) {
  props.counter = 200;
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>{props.counter}</h2>
      {props.nameArr.map((item) => (
        <h2>{item}</h2>
      ))}
      <h2>{props.person.firstName}</h2>
      {props.children}
    </div>
  );
}

export default Welcome;
