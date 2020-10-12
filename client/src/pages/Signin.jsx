import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/Form.css";

class Signin extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <h2 className="title">Signin</h2>

        <label className="label" htmlFor="email">
          Email
        </label>
        <input className="input" type="email" name="email" id="email" />

        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          name="password"
          id="password"
        />

        <button className="btn">Submit</button>
        <p>
          Don't have an account yet ?{" "}
          <Link className="link" to="/signup">
            Signin
          </Link>
        </p>
      </form>
    );
  }
}

export default Signin;
