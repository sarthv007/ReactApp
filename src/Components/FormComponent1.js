import React, { Component } from "react";

export default class FormComponent1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h2>Controlled Component</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.userName}
            onChange={this.handleUserNameChange}
          />
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
