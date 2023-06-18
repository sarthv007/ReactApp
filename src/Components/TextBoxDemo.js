import React, { Component } from "react";

export default class TextBoxDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false,
      firstName: "",
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ firstName: event.target.value });
  };

  handleMouseEnter = (event) => {
    console.log("inside handleMouseEnter");
  };

  handleClick = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };

  render() {
    const { flag, firstName } = this.state;
    return (
      <div>
        <input
          type="text"
          value={firstName}
          onChange={this.handleChange}
          //onBlur={this.handleOnBlur}
          onMouseEnter={this.handleMouseEnter}
        />
        <button onClick={this.handleClick}> Print Text</button>
        {flag ? firstName : ""}
      </div>
    );
  }
}
