import React from "react";
import GComponent from "./GComponent";
import context from "./Context";
function EComponent() {
  return (
    <context.Consumer>
      {(value) => {
        return (
          <>
            <h1>From Component E</h1>
            <ul>
              {value.users.length &&
                value.users.map((user) => (
                  <>
                    <li>{user.firstName}</li>
                  </>
                ))}
            </ul>
            <GComponent />
          </>
        );
      }}
    </context.Consumer>
  );
}

export default EComponent;
