import React, { Component } from "react";

export class DemoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonMessage: "Subcribe",
      message: "Please subcribe our channel",
    };
  }

  handleClick = () => {
    this.setState({
      buttonMessage: "Subscribed",
      message: "Thank you for subscribing our channel",
    });

    //this.state.message = "Thank you for subscribing our channel";
    //console.log(this.state.message);
  };

  render() {
    console.log(this.state.message);
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.handleClick}>{this.state.buttonMessage}</button>
      </div>
    );
  }
}

export default DemoComponent;
