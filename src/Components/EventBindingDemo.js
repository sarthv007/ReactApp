import React, { Component } from "react";

export default class EventBindingDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome to react js world!",
    };
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ message: "Welcome to js world!" });
    console.log(this);
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <h2>{message}</h2>
        <button onClick={this.handleClick.bind(this)}>Click Me</button>
      </div>
    );
  }
}
