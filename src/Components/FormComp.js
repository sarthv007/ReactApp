import React, { Component } from "react";
import "./FormComp.scss";

export default class FormComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      country: "USA",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  hadleSubmit = (event) => {
    event.preventDefault();
    console.log("Form has been submitted", this.state);
  };

  render() {
    const { firstName, lastName, country } = this.state;
    //console.log(this.state);
    return (
      <div className="wrapper">
        <h3>React Controlled Component Example</h3>
        <div>
          <form onSubmit={this.hadleSubmit}>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstName"
              placeholder="Your name.."
              onChange={this.handleChange}
              value={firstName}
            />

            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastName"
              placeholder="Your last name.."
              onChange={this.handleChange}
              value={lastName}
            />

            <label htmlFor="country">Country</label>
            <select
              id="country"
              name="country"
              value={country}
              onChange={this.handleChange}
            >
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
