import React, { Component } from "react";
import "../css/registration.css";
class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      password: "",
      email: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const { name, surname, password, email } = this.state;

    const user = {
      name: name,
      surname: surname,
      password: password,
      email: email,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    fetch("http://localhost:8080/api/users", requestOptions).catch((error) => {
      console.log("Error", error);
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="login-inputs">
              <input
                className="mr-2 mb-2 col-sm-12 rounded"
                type="name"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              ></input>
              <input
                className="mb-2 col-sm-12 rounded"
                type="surname"
                name="surname"
                placeholder="Surname"
                value={this.state.surname}
                onChange={this.handleChange}
                required
              ></input>
            </div>
            <input
              className="mr-2 mb-2 col-sm-12 rounded"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            ></input>
            <input
              className="col-sm-12 mb-2 rounded"
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            ></input>
            <button className="btn btn-dark btn-md col-md-12" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;
