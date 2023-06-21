import React, { Component } from "react";
import TableComponent from "./Http/TableComponent";
import axios from "axios";

export default class HttpRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    //api call you call it as network request or http request
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((respose) => respose.json())
    //   .then((postData) => this.setState({ posts: postData }));

    //api call using axios
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => this.setState({ posts: response.data }));
  }

  render() {
    return (
      <div>
        <TableComponent posts={this.state.posts} />
      </div>
    );
  }
}
