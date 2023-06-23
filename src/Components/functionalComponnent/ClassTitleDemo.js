import React, { Component } from "react";

export default class ClassTitleDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.counter} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      console.log("counter value changes", this.state.counter);
      document.title = `Clicked ${this.state.counter} times`;
    }
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.name} />
        <button onClick={this.handleIncrement}>
          Clicked {this.state.counter} times
        </button>
      </div>
    );
  }
}
