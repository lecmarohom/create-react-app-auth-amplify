import React, { Fragment, Component } from 'react';
import { Route } from 'react-router-dom';
import { Auth } from 'aws-amplify';

import Navigation from '../../Components/Layout/Navigation/Navigation';
import Navigation_Login from '../../Components/Layout/Navigation_LogIn/NavigationLogIn';
import Footer from '../../Components/Layout/Footer/Footer';


import Home from '../../Components/Layout/Home/Home';
import AboutUs from '../../Components/Layout/AboutUs/AboutUs';
import Login from '../../Components/Authentication/auth/LogIn';
import Signup from '../../Components/Authentication/auth/Register'
import ForgotPassword from '../../Components/Authentication/auth/ForgotPassword';
import ForgotPasswordVerification from '../../Components/Authentication/auth/ForgotPasswordVerification';
import ChangePassword from '../../Components/Authentication/auth/ChangePassword';
import ChangePasswordConfirm from '../../Components/Authentication/auth/ChangePasswordConfirm';


import ContactUs from '../../Components/Layout/ContactUs/ContactUs';
import Portfolio from '../../Components/Layout/Portfolio/Portfolio';
import Itogon from '../../Components/Layout/ProjectSite/Itogon/Itogonsite'
import SensorsDownload from '../../Components/Layout/SensorDownload/SensorDownload'
import Verify from '../../Components/Authentication/auth/Welcome'

class LandingPage extends Component {

  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null
  }

  setAuthStatus = (authenticated) => {
    this.setState({ isAuthenticated: authenticated});
  }

  setUser = (user) => {
    this.setState({ user: user });
  }

  async componentDidMount() {
    try {
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      console.log(session);
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
    }catch(error) {
      console.log(error);
    }
    this.setState({ isAuthenticating: false });
  }

  render() {
    
  const authProps = {
    isAuthenticated: this.state.isAuthenticated,
    user: this.state.user,
    setAuthStatus: this.setAuthStatus,
    setUser: this.setUser
  }
  return (
    !this.state.isAuthenticating && 
    <Fragment>
      {!this.state.isAuthenticated && (
        <Navigation auth={authProps}/>
      )}
      {this.state.isAuthenticated && (
        <Navigation_Login auth={authProps}/>
      )}

      <Route exact path="/SignIn" render={(props) => <Login {...props} auth={authProps} /> } />
      {/* <Route exact path="/SignIn" component={login} /> */}
      <Route exact path="/SignIn/register" render={(props) => <Signup {...props} auth={authProps} /> } />
      <Route exact path="/ContactUs"  render={(props) => <ContactUs {...props} auth={authProps} /> } />
      <Route exact path="/Gallery" render={(props) => <Portfolio {...props} auth={authProps} /> } />
      <Route exact path="/downloadData"  render={(props) => <SensorsDownload {...props} auth={authProps} /> } />
      <Route exact path="/verify"  render={(props) => <Verify {...props} auth={authProps} /> } />  
      <Route exact path="/sites/Benguet" render={(props) => <Itogon {...props} auth={authProps} /> } />
      <Route exact path="/forgotpassword"  render={(props) => <ForgotPassword {...props} auth={authProps} /> } />
      <Route exact path="/forgotpasswordverification"  render={(props) => <ForgotPasswordVerification {...props} auth={authProps} /> } />
      <Route exact path="/changepassword"  render={(props) => <ChangePassword {...props} auth={authProps} /> } />
      <Route exact path="/changepasswordconfirmation" render={(props) => <ChangePasswordConfirm {...props} auth={authProps} /> } />
     

      <Route exact path="/" component={Home} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Footer />
    </Fragment>
  );
  };
};

export default LandingPage;
