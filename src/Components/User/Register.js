import React from 'react';
import { Container, Row, Col, FormGroup, Input, Card, CardBody } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Component } from 'react';
import { register } from '../../Actions/register-action';

// import thunk from 'redux-thunk';


class Register extends Component {
  constructor(props) {
    super();

    this.state = {
        name: '',
        username: '',
        password: '',
        role: '',
        errors: {
          cognito: null,
          blankfield: false,
          passwordmatch: false
        }
    };

    this.handleName = this.handleName.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.register = this.register.bind(this);
  
  }


  register = async event => {
    event.preventDefault();
    
    this.props.userDetails(this.state.name, this.state.username, this.state.password);
    console.log(this.props);
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let redirect = false;
    if (nextProps.isAuthenticated) {
      redirect = true;
    }

    return { redirectToReferrer: redirect, role: nextProps.role };
  }

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.register();
    }
  };

  render() {
    const { token } = localStorage;

    if (token) {
      let to = '';
      const { role } = localStorage;
      if (role === 'admin') {
        to = 'admin';
      } else if (role === '') {
        to = 'guest';
      }
      return <Redirect to={to} />;
    }

    return (
      <Container className="bg-gray-100">
        <Row>
          <Col sm="12" className="mt-3">
            <div className="form-user-login">
              <div className="mt-3 text-center">
                <h3 className="mt-4 font-weight-light">Register to SCaRP</h3>
              </div>

              <div className="card mt-3 shadow py-3 px-3">
                <div className="card-body">
                  {/* {
                  this.props.invalidLogin === 'true'
                    ? <div class="alert alert-danger" role="alert">
                        Invalid username or password.
                      </div>
                    : ""
                }
                {
                  this.props.accountCreated === 'true'
                    ? <div className="alert alert-success" role="alert">
                        {this.props.message}
                      </div>
                    : ""
                } */}
                <FormGroup>
                <Input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    onChange={this.handleName}
                    onKeyPress={this.handleKeyPress}
                />
                </FormGroup>
                  <FormGroup>
                    <Input
                      type="username"
                      name="username"
                      id="username"
                      placeholder="Email / Phone"
                      onChange={this.handleUsername}
                      onKeyPress={this.handleKeyPress}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={this.handlePassword}
                      onKeyPress={this.handleKeyPress}
                    />
                  </FormGroup>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={() => this.register()}
                  >
                    Sign In
                  </button>
                </div>
              </div>

              <Card className="mt-4 bg-black-50 border border-gray-300">
                <CardBody className="text-center">
                  Already registered to
                  <span className="font-weight-bold"> SCaRP</span>
                  <Link to="/SignIn" className="card-link font-weight-bold"> Go to Login</Link>.
                </CardBody>
              </Card>
              <p className="copyright text-center mt-3">
                &copy; 2019 SCaRP. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     role: state.user.role
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    userDetails: (name, username, password) => {
      dispatch(register(name, username, password));
    }
  };
};

export default connect(null, mapDispatchToProps)(Register);
