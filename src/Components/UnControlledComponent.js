import React, { Component } from "react";

export default class UnControlledComponent extends Component {
  constructor(props) {
    super(props);
    this.userNameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.userNameRef.current.value);
    console.log(this.passwordRef.current.value);
  };

  render() {
    return (
      <div>
        <h2>UnControlled Component</h2>
        <form onSubmit={this.handleSubmit}>
          <input ref={this.userNameRef} />
          <input type="password" ref={this.passwordRef} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
