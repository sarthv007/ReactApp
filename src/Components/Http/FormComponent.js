import React, { Component } from "react";
import "./FormComponent.scss";
import axios from "axios";

export default class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      title: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("from submit handler", this.state);

    //post Api call
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    //api call using axios post method
    axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: this.state,
    }).then((response) => {
      console.log("received response from server is", response);
    });
  };

  onHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <h2>Form handling using api</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="fname">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Your Title"
            value={this.state.title}
            onChange={this.onHandleChange}
          />

          <label htmlFor="lname">Body</label>
          <input
            type="text"
            id="body"
            name="body"
            placeholder="Your body.."
            value={this.state.body}
            onChange={this.onHandleChange}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
