import React, { Component } from "react";

class CounterDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  IncrementCounter = () => {
    // this.setState({
    //   counter: this.state.counter + 1,
    // });

    //this.setState is asyncronous function

    this.setState(
      (prevState) => ({ counter: prevState.counter + 1 }),
      () => {
        console.log("inside arrow function", this.state.counter);
      }
    );

    console.log("Outside", this.state.counter);
  };

  DecrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  IncrementCounterByFive = () => {
    this.IncrementCounter();
    this.IncrementCounter();
    this.IncrementCounter();
    this.IncrementCounter();
    this.IncrementCounter();
  };

  render() {
    const { counter } = this.state;
    const { message, courseName } = this.props;

    console.log(this.props);
    return (
      <div>
        <h2>{message}</h2>
        <h2>Counter: {counter}</h2>
        //this our javascript code
        <button onclick="IncrementCounter()">Increment</button>
        //this is react code
        <button onClick={this.IncrementCounter}>Increment</button>
        <button onClick={this.DecrementCounter}>Decrement</button>
        <button onClick={this.IncrementCounterByFive}>
          Increment Counter By 5
        </button>
        <h2>{courseName}</h2>
      </div>
    );
  }
}

export default CounterDemo;
