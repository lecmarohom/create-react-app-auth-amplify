import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";

import { Container, Row, Col, FormGroup, Input } from 'reactstrap';

class ForgotPassword extends Component {
  state = {
    email: "",
    errors: {
      cognito: null,
      blankfield: false
    }
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  }

  forgotPasswordHandler = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }

    // AWS Cognito integration here
  }

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  render() {
    return (
      <Container className="bg-gray-100">
         <Row>
          <Col sm="12" className="mt-3">
          <section className="section auth">
            <div className="container">
              <h1>Forgot your password?</h1>
              <p>
                Please enter the email address associated with your account and we'll
                email you a password reset link.
              </p>
              <FormErrors formerrors={this.state.errors} />

              <form onSubmit={this.forgotPasswordHandler}>
              <FormGroup>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <Input
                      type="email"
                      className="input"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.onInputChange}
                    />
                    {/* <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span> */}
                  </p>
                </div>
                </FormGroup>
                {/* <FormGroup>
                <div className="field">
                  <p className="control">
                    <a href="/forgotpassword">Forgot password?</a>
                  </p>
                </div>
                </FormGroup> */}
                <div className="field">
                  <p className="control">
                    <button className="btn btn-primary btn-block">
                      Login
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </section>
          </Col>
          </Row>
        </Container>
    );
  }
}

export default ForgotPassword;