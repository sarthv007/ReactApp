import React, { Component } from "react";
import HOC from "./HOC";

class ClickCounter extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Counter: {this.props.counter} </h2>
        <button onClick={this.props.increment}>Increment</button>
      </div>
    );
  }
}
export default HOC(ClickCounter);
