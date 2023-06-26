import React from "react";

function Todos(props) {
  const { todos, addTodos } = props;
  console.log("Inside todos component");
  return (
    <div>
      <ul>
        {todos.length > 0 &&
          todos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <button onClick={addTodos}>Add Todos</button>
    </div>
  );
}

export default React.memo(Todos);
