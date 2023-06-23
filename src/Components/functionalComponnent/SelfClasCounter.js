import React, { Component } from "react";

export default class SelfClasCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h3>Counter: {this.state.counter}</h3>;
  }
}
