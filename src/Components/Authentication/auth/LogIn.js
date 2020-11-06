import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from 'aws-amplify';

import { Container, Row, Col, FormGroup, Input, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

class LogIn extends Component {
  state = {
    username: "",
    password: "",
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
    try{
      const user = await Auth.signIn(
        this.state.username, this.state.password
      );
      console.log(user);
      this.props.auth.setAuthStatus(true);
      this.props.auth.setUser(user);
      this.props.history.push("/")
    }catch(error) {
      let err = null;
      !error.message ? err = { "message": error } : err = error;
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err
        }
      })
    }
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
            <div className="form-user-login">
              <div className="mt-3 text-center">
                
                <h3 className="mt-4 font-weight-light">Sign in to SCaRP</h3>
              </div>

              <div className="text-danger">
                <FormErrors  formerrors={this.state.errors} />
              </div>
         

              <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <div className="field">
                  <p className="control">
                    <Input 
                      className="input" 
                      type="text"
                      id="username"
                      aria-describedby="usernameHelp"
                      placeholder="Enter username or email"
                      value={this.state.username}
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
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={this.state.password}
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
                  <p className="mt-3 text-center">
                    <a href="/forgotpassword" >Forgot password?</a>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button 
                      type="submit"
                      className="btn btn-primary btn-block">
                      Login
                    </button>
                  </p>
                </div>
                </FormGroup>

                <Card className="mt-4 bg-black-50 border border-gray-300">
                    <CardBody className="text-center">
                      To download Data from
                      <span className="font-weight-bold"> SCaRP</span>
                      <Link to="/SignIn/register" className="card-link font-weight-bold"> Register Now</Link>.
                    </CardBody>
                </Card>
              </form>
          </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LogIn;