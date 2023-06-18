import React, { Component } from "react";
import UserList from "./UserList";

//import "./ListRenderingComp.scss";
import style from "./ListRendering.module.scss";
export default class ListRenderingComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
        },
        {
          id: 2,
          firstName: "mike",
          lastName: "tisan",
        },
        {
          id: 3,
          firstName: "Json",
          lastName: "holder",
        },
      ],
    };
  }

  render() {
    const { users } = this.state;

    return (
      <>
        <h2>User Listing</h2>

        <table
          className={style.wrapper}
          style={{ margin: "20px", border: "1px solid green" }}
        >
          <thead>
            <tr className={style.item}>
              <th className={style.item}>First Name</th>
              <th className={style.item}>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.length &&
              users.map((item) => {
                return (
                  <>
                    <UserList item={item} key={item.id} title={"User List"} />
                  </>
                );
              })}
          </tbody>
        </table>
      </>
    );
  }
}
