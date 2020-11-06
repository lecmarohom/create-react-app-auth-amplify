import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from 'aws-amplify';

import { Container, Row, Col, FormGroup, Input, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
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
    const { username, email, password } = this.state;
    try{
      const signUpResponse = await Auth.signUp({
        username,
        password,
        attributes: {
          email: email
        }
      });
      console.log(signUpResponse);
      this.props.history.push("/verify")
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
  }

  render() {
    return (

      <Container className="bg-gray-100">
         <Row>
          <Col sm="12" className="mt-3">
          <section className="section auth">
            <div className="container">
            <h3 className="mt-4 text-center font-weight-light">Register to SCaRP</h3>

              <div className="text-danger">
              <FormErrors formerrors={this.state.errors} />
              </div>
              

              <form onSubmit={this.handleSubmit}>

              <FormGroup>
                <div className="field">
                  <p className="control">
                    <Input 
                      className="input" 
                      type="text"
                      id="username"
                      aria-describedby="userNameHelp"
                      placeholder="Enter username"
                      value={this.state.username}
                      onChange={this.onInputChange}
                    />
                  </p>
                </div>
               </FormGroup>
               <FormGroup>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
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
                  <p className="mt-3 text-center">
                    <a href="/forgotpassword">Forgot password?</a>
                  </p>
                </div> */}
                <div className="field">
                  <p className="control">
                    <button  className="btn btn-primary btn-block">
                      Register
                    </button>
                  </p>
                </div>
                <Card className="mt-4 bg-black-50 border border-gray-300">
                    <CardBody className="text-center">
                      Already Registered to
                      <span className="font-weight-bold"> SCaRP?</span>
                      <Link to="/SignIn/" className="card-link font-weight-bold"> SignIn Now!</Link>.
                    </CardBody>
                </Card>
              </form>
            </div>
          </section>
        </Col>
        </Row>
      </Container>
    );
  }
}

export default Register;