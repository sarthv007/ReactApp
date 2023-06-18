import React, { Component } from "react";

export default class UpdatingPhaseDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: "Welcome to js",
    };
    console.log("From Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("From getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("from shouldComponentUpdate", nextProps, nextState);
    // if (this.state.counter > 2) {
    //   return false;
    // }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("from getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state, prevState);
    if (prevState.counter === 2) {
      console.log("from componentDidUpdate", snapshot);
      this.setState({
        message: "Welcome to react",
      });
    }
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    console.log("from render");
    return (
      <div>
        <h2>{this.state.message}</h2>
        <h2>Counter : {this.state.counter}</h2>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
