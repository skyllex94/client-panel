import React, { Component } from "react";
// import { compose } from "redux";
// import { connect } from "react-redux";
import PropTypes from "prop-types";
import { firebaseConnect } from "react-redux-firebase";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onSubmit = e => {
    e.preventDefault();
    const { firebase } = this.props;

    firebase
      .login({
        email: this.state.email,
        password: this.state.password
      })
      .catch(err => alert("Invalid Login Credentials"));
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center pb-4 pt-3">
                <span className="text-primary">
                  <i className="fas fa-lock" /> Login
                </span>
              </h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control mb-4"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this.onChange}
                  />

                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary btn-block"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  firebase: PropTypes.object.isRequired
};

export default firebaseConnect()(Login);
