import React, { Component } from "react";

export default class ErrorBoundery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2 style={{ color: "red" }}>Something went wrong!</h2>;
    }
    return <div>{this.props.children}</div>;
  }
}
