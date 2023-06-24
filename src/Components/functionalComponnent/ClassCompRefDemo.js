import React, { Component } from "react";

export default class ClassCompRefDemo extends Component {
  constructor(props) {
    super(props);
    this.interval = 0;
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  //   componentWillUnmount() {
  //     clearInterval(this.interval);
  //   }

  handleStop = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <div>
        <h3>Counter: {this.state.counter}</h3>
        <button onClick={this.handleStop}>Stop Interval</button>
      </div>
    );
  }
}
