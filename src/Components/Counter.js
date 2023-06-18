import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  IncrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  DecrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.IncrementCounter}>Increment</button>
        <button onClick={this.DecrementCounter}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
