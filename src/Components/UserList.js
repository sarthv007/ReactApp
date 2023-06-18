import React, { Fragment } from "react";
import "./ListRenderingComp.scss";
function UserList({ item }) {
  return (
    <>
      <tr>
        <td>{item.id}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
      </tr>
    </>
  );
}

export default UserList;
