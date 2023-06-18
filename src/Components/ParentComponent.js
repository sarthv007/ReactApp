import React, { Component, PureComponent } from "react";
import ChildComponent from "./ChildComponent";
import MemoComponentDemo from "./MemoComponentDemo";

export default class ParentComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "sarthak",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "sarthak" });
    }, 2000);
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     if (nextState.name !== this.state.name) {
  //       return true;
  //     }
  //     return false;
  //   }

  render() {
    console.log("rendering ParentComponent");
    return (
      <div>
        {/* <ChildComponent name={this.state.name} /> */}
        <MemoComponentDemo name={this.state.name} />
      </div>
    );
  }
}
