import React, { Component } from "react";

export default class SendDataFromParentToChildAsMethod extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.message}</h2>
        <button onClick={this.props.changeMessage}>Change Message</button>
      </div>
    );
  }
}
