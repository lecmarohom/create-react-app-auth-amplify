import React from 'react';
import { Container, Row, Col, FormGroup, Input, Card, CardBody } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../Assets/logo.png';
import { Component } from 'react';
import { user } from '../../Actions';
import classes from './login.module.css';
// import thunk from 'redux-thunk';


class userLogin extends Component {
  constructor(props) {
    super();

    this.state = {
      username: '',
      password: '',
      role: '',
      errors: {}
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.login = this.login.bind(this);
  
  }


  login = () => {
    this.props.getToken(this.state.username, this.state.password);
    console.log(this.props);
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let redirect = false;
    if (nextProps.isAuthenticated) {
      redirect = true;
    }

    return { redirectToReferrer: redirect, role: nextProps.role };
  }

  handleUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.login();
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
                <img className={classes.logo} src={logo} alt="SCaRP Logo" />
                <h3 className="mt-4 font-weight-light">Sign in to SCaRP</h3>
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
                    onClick={() => this.login()}
                  >
                    Sign In
                  </button>
                </div>
              </div>

              <Card className="mt-4 bg-black-50 border border-gray-300">
                <CardBody className="text-center">
                  To download Data from
                  <span className="font-weight-bold"> SCaRP</span>
                  <Link to="/SignIn/register" className="card-link font-weight-bold"> Register Now</Link>.
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

const mapStateToProps = (state) => {
  return {
    role: state.user.role
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getToken: (username, password) => {
      dispatch(user.getToken(username, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(userLogin);
