import React, { useContext } from "react";
import GComponent from "./GComponent";
import context from "./Context";
function EComponent() {
  const state = useContext(context);
  return (
    <>
      <h1>From Component E</h1>
      <ul>
        {state.users.length &&
          state.users.map((user) => (
            <>
              <li>{user.firstName}</li>
            </>
          ))}
      </ul>
      <GComponent />
    </>
  );
}

export default EComponent;
