import React, { Component } from "react";

export default class ChildComponent extends Component {
  render() {
    console.log("rendering ChildComponent");
    return (
      <div>
        <h2>Child Component</h2>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}
