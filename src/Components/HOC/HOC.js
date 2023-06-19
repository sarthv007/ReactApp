import React from "react";

function HOC(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        counter: 0,
      };
    }

    increment = () => {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    };

    render() {
      console.log("HOC", this.props);
      return (
        <WrappedComponent
          {...this.props}
          increment={this.increment}
          counter={this.state.counter}
        />
      );
    }
  };
}

export default HOC;
