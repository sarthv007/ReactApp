import React, { Component } from "react";
import UserList from "./UserList";

//import "./ListRenderingComp.scss";
import style from "./ListRendering.module.scss";

export default class ListwithKey extends Component {
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
      ],
    };
  }

  addTop = () => {
    const item = {
      id: this.state.users.length,
      firstName: `abc ${this.state.users.length + 1}`,
      lastName: `xyz ${this.state.users.length + 1}`,
    };
    this.setState({
      users: [item, ...this.state.users],
    });
  };

  addBottom = () => {
    const item = {
      id: this.state.users.length,
      firstName: `abc ${this.state.users.length + 1}`,
      lastName: `xyz ${this.state.users.length + 1}`,
    };
    this.setState({
      users: [...this.state.users, item],
    });
  };

  render() {
    const { users } = this.state;

    return (
      <>
        <button onClick={this.addTop}>Add Top</button>
        <button onClick={this.addBottom}>Add Bottom</button>
        <table
          className={style.wrapper}
          style={{ margin: "20px", border: "1px solid green" }}
        >
          <thead>
            <tr className={style.item}>
              <th className={style.item}>Key</th>
              <th className={style.item}>First Name</th>
              <th className={style.item}>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.length &&
              users.map((item, index) => {
                return <UserList item={item} key={item.id} index={index} />;
              })}
          </tbody>
        </table>
      </>
    );
  }
}
