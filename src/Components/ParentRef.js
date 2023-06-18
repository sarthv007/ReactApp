import React, { Component } from "react";
import ChildComponentInput from "./ChildComponentInput";

export default class ParentRef extends Component {
  constructor(props) {
    super(props);
    this.parentInputRef = React.createRef();
  }

  handleClick = () => {
    this.parentInputRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <ChildComponentInput ref={this.parentInputRef} />
        <button onClick={this.handleClick}>Focus Child Input</button>
      </div>
    );
  }
}
