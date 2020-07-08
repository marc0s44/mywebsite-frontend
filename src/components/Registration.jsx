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
      messages: [],
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

    fetch("http://localhost:8080/api/users", requestOptions)
      .then(async (response) => {
        if (response.status === 400) {
          const data = await response.json();
          this.setState({
            messages: data.reason,
          });
        } else if (response.status === 201) {
          this.setState({
            messages: ["Account created successfully!"],
          });
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Registration</h2>
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
            <button
              className="btn btn-dark btn-md col-md-12 mb-2"
              type="submit"
            >
              Register
            </button>{" "}
            <div>
              {this.state.messages.map((message, idx) => (
                <p key={idx}>{message}</p>
              ))}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;
