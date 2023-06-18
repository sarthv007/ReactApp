import React, { Component } from "react";
import HideComponent from "./HideComponent";
export default class UnMountingPhaseDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: true,
    };
  }

  handleClick = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Hide Component</button>
        {this.state.flag && <HideComponent />}
      </div>
    );
  }
}
