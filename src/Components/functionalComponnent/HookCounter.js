import React, { useEffect, useState } from "react";

function HookCounter(props) {
  //syntax of useState hook
  // const [state, setState] = useState(defaultValue);
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState(
    "Function Coponent counter application"
  );
  const [users, setUsers] = useState([
    {
      firstName: "json",
    },
    {
      firstName: "holder",
    },
    {
      firstName: "john",
    },
  ]);

  const [person, setPerson] = useState({
    firstName: "json",
    lastName: "holder",
    age: 30,
  });

  function handleIncrement() {
    setCounter(counter + 1);
    setMessage(`Counter value is ${counter}`);
  }

  return (
    <div>
      <h4>{message}</h4>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <div>
        <h3>
          {person.firstName} {person.lastName} {person.age}
        </h3>
      </div>
      <ul>{users.length && users.map((user) => <li>{user.firstName}</li>)}</ul>
    </div>
  );
}

export default HookCounter;
