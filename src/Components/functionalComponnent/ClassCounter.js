import React, { Component } from "react";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      users: [],
      person: { firstName: "json", lastName: "holder", age: 30 },
      message: "Class Coponent counter application",
    };
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <h4>{this.state.message}</h4>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.handleIncrement}>Increment Count</button>
      </div>
    );
  }
}
