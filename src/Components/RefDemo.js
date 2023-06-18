import React, { Component } from "react";

export default class RefDemo extends Component {
  constructor(props) {
    super(props);
    //this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    //this.inputRef.current.focus();
    this.cbRef.focus();
  }

  handleClick = () => {
    //console.log(this.inputRef.current.value);
    console.log(this.cbRef.value);
  };

  render() {
    return (
      <div>
        {/* <input type="text" ref={this.inputRef} /> */}
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.handleClick}>Show me text</button>
      </div>
    );
  }
}
