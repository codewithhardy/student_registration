import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
export class Register extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      phone: "",
      email: "",
      roll: "",
      password: "",
    };
    this.changeFullName = this.changeFullName.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeRoll = this.changeRoll.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }

  changePhone(event) {
    this.setState({
      phone: event.target.value,
    });
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  changeRoll(event) {
    this.setState({
      roll: event.target.value,
    });
  }

  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const registered = {
      fullName: this.state.fullName,
      phone: this.state.phone,
      email: this.state.email,
      roll: this.state.roll,
      password: this.state.password,
    };

    axios
      .post("http://localhost:5000/app/signup", registered)
      .then((res) => console.log(res.data));

    this.setState({
      fullName: "",
      phone: "",
      email: "",
      roll: "",
      password: "",
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="form-div">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                onChange={this.changeFullName}
                value={this.state.fullName}
                className="form-control form-group"
              />

              <input
                type="number"
                placeholder="Phone"
                onChange={this.changePhone}
                value={this.state.phone}
                className="form-control form-group"
              />

              <input
                type="email"
                placeholder="Email"
                onChange={this.changeEmail}
                value={this.state.email}
                className="form-control form-group"
              />
              <input
                type="number"
                placeholder="Roll"
                onChange={this.changeRoll}
                value={this.state.roll}
                className="form-control form-group"
              />

              <input
                type="password"
                placeholder="Password"
                onChange={this.changePassword}
                value={this.state.password}
                className="form-control form-group"
              />

              <input
                type="submit"
                className="btn btn-dark btn-block"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
