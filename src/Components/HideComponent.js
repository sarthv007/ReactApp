import React, { Component } from "react";

export default class HideComponent extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount called ");
  }

  render() {
    return <div>Welcome to react life cycle methods</div>;
  }
}
