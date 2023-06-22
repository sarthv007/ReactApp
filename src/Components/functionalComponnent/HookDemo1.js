import React, { useState } from "react";

function HookDemo1(props) {
  const [state, setState] = useState({
    counter: 0,
    users: [],
    person: { firstName: "json", lastName: "holder", age: 30 },
    message: "Welcome to functional components",
  });

  function handleClick() {
    setState({
      ...state,
      message: "Welcome to react!",
    });
  }
  console.log("inside hookdemo", state);
  return (
    <div>
      <h2>Counter: {state.counter}</h2>
      <h3>{state.message}</h3>
      <h3>
        {state.person && state.person.firstName}
        {state.person && state.person.lastName}
        {state.person && state.person.age}
      </h3>
      <button onClick={handleClick}>Change message</button>
    </div>
  );
}

export default HookDemo1;
