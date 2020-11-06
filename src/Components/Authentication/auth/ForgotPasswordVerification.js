import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import { Container, Row, Col, FormGroup, Input } from 'reactstrap';

class ForgotPasswordVerification extends Component {
  state = {
    verificationcode: "",
    email: "",
    newpassword: "",
    errors: {
      cognito: null,
      blankfield: false
    }
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  };

  passwordVerificationHandler = async event => {
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
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {
    return (
      <Container className="bg-gray-100">
         <Row>
          <Col sm="12" className="mt-3">
          <section className="section auth">
            <div className="container">
              <h1>Set new password</h1>
              <p>
                Please enter the verification code sent to your email address below,
                your email address and a new password.
              </p>
              <FormErrors formerrors={this.state.errors} />

              <form onSubmit={this.passwordVerificationHandler}>
              <FormGroup>
                <div className="field">
                  <p className="control">
                    <Input
                      type="text"
                      className="input"
                      id="verificationcode"
                      aria-describedby="verificationCodeHelp"
                      placeholder="Enter verification code"
                      value={this.state.verificationcode}
                      onChange={this.onInputChange}
                    />
                  </p>
                </div>
                </FormGroup>
                <FormGroup>
                <div className="field">
                  <p className="control has-icons-left">
                    <Input 
                      className="input" 
                      type="email"
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
                <FormGroup>
                <div className="field">
                  <p className="control has-icons-left">
                    <Input
                      type="password"
                      className="input"
                      id="newpassword"
                      placeholder="New password"
                      value={this.state.newpassword}
                      onChange={this.onInputChange}
                    />
                    {/* <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span> */}
                  </p>
                </div>
                </FormGroup>
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

export default ForgotPasswordVerification;