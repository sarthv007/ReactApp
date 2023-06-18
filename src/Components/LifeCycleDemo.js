import React, { Component } from "react";

export default class LifeCycleDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome To life cycle methods of react",
    };
    console.log("From constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("From getDerivedStateFromProps");
    return {
      message: props.text,
    };
  }

  componentDidMount() {
    alert("componentDidMount is called");
    console.log("From componentDidMount");
    document.title = this.state.message;
    //this method is perfect method for doing a api call and do a this.setState
  }

  render() {
    console.log("From render");
    return (
      <div>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}
