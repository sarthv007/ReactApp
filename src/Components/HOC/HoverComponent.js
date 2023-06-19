import React, { Component } from "react";
import HOC from "./HOC";

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.increment}>
          Counter: {this.props.counter}{" "}
        </h2>
      </div>
    );
  }
}
export default HOC(HoverCounter);
