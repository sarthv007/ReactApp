import React, { Component } from "react";

export default class ConditionalRendingDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: true,
      message: "Welcome to react!",
    };
  }
  render() {
    const { message, flag } = this.state;
    // let html;
    // if (flag) {
    //   html = <h2>{message}</h2>;
    // } else {
    //   html = <h2>Flag is false</h2>;
    // }

    // return <div>{html}</div>;

    //2nd way
    // const { message, flag } = this.state;
    // if (flag) {
    //   return <h2>{message}</h2>;
    // } else {
    //   return <h2>Flag is false</h2>;
    // }

    //3rd way is short ? ... :
    //return <div>{flag === true ? message : "flag value is false"}</div>;

    //4th way for conditional rendering short circuit operator
    return (
      <h2>
        {flag && "this is the react js traing class by mr sarthak vaidya"}
      </h2>
    );
  }
}
