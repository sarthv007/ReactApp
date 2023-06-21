import React from "react";
import { Link } from "react-router-dom";

function Users() {
  const usersData = [
    {
      id: 1,
      name: "john",
    },
    {
      id: 2,
      name: "json",
    },
    {
      id: 3,
      name: "holder",
    },
  ];
  return (
    <div>
      <ul>
        {usersData.length &&
          usersData.map((user) => (
            <li>
              <Link to={`${user.id}`}>{user.name}</Link>
            </li>
          ))}
      </ul>
      ;
    </div>
  );
}

export default Users;
