import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import { Container, Row, Col, FormGroup, Input } from 'reactstrap';

class ChangePassword extends Component {
  state = {
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false
    }
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false
      }
    });
  }

  handleSubmit = async event => {
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
  }

  render() {
    return (
      <Container className="bg-gray-100">
         <Row>
          <Col sm="12" className="mt-3">
          <section className="section auth">
            <div className="container">
              <h1>Change Password</h1>
              <FormErrors formerrors={this.state.errors} />

              <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <div className="field">
                  <p className="control has-icons-left">
                    <Input 
                      className="input" 
                      type="password"
                      id="oldpassword"
                      placeholder="Old password"
                      value={this.state.oldpassword}
                      onChange={this.onInputChange}
                    />
                    {/* <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span> */}
                  </p>
                </div>
                </FormGroup>
                <FormGroup>
                <div className="field">
                  <p className="control has-icons-left">
                    <Input
                      className="input"
                      type="password"
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
                <FormGroup>
                <div className="field">
                  <p className="control has-icons-left">
                    <Input
                      className="input"
                      type="password"
                      id="confirmpassword"
                      placeholder="Confirm password"
                      value={this.state.confirmpassword}
                      onChange={this.onInputChange}
                    />
                    {/* <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span> */}
                  </p>
                </div>
                </FormGroup>
                {/* <div className="field">
                  <p className="control">
                    <a href="/forgotpassword">Forgot password?</a>
                  </p>
                </div> */}
                <div className="field">
                  <p className="control">
                    <button className="btn btn-primary btn-block">
                      Change password
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

export default ChangePassword;