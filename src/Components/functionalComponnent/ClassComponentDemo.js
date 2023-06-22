import React, { Component } from "react";

export default class ClassComponentDemo extends Component {
  componentDidMount() {
    alert("Component has insterted inside a dom");
    document.title = "Welcome to react!";
  }

  render() {
    return <div>ClassComponentDemo</div>;
  }
}
