import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect, 
} from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import login from './Components/Authentication/auth/LogIn';
import signup from './Components/Authentication/auth/Register'


import './App.css';

import scarp from './Reducers';

import 'bootstrap/dist/css/bootstrap.min.css'; //for bootstrap
import 'leaflet/dist/leaflet.css'; //for leaflet
import Dashboard from './Container/Dashboard/Dashboard';
import LandingPage from './Container/LandingPage/LandingPage';

import ContactUs from './Components/Layout/ContactUs/ContactUs';
import Portfolio from './Components/Layout/Portfolio/Portfolio';
import notfound from './Components/Layout/notfound';

// sites
import itogon from './Components/Layout/ProjectSite/Itogon/Itogonsite'
import SensorsDownload from './Components/Layout/SensorDownload/SensorDownload'
import verify from './Components/Authentication/auth/Welcome'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab);

let store = createStore(
  scarp,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);



// const history = createBrowserHistory({
//   basename: 'base-name'
// }) 

class App extends Component {

  // state = {
  //   isAuthenticated: false,
  //   user: null
  // }

  // setAuthStatus = authenticated => {
  //   this.setState({ isAuthenticated: authenticated});
  // }

  // setUser = user => {
  //   this.setState({ user: user });
  // }

  render() {
      // const authProps = {
      //   isAuthenticated: this.state.isAuthenticated,
      //   user: this.state.user,
      //   setAuthStatus: this.setAuthStatus,
      //   setuser: this.setUser
      // }

    return (
      <Provider store={store}>
        <Router basename="/">
          <Switch>
            {/* <Route exact path="/SignIn" component={login} />
            <Route exact path="/SignIn/register" component={signup} />
            <Route exact path="/ContactUs" component={ContactUs} />
            <Route exact path="/Gallery" component={Portfolio} />
            <Route exact path="/downloadData" component={SensorsDownload} />
            <Route exact path="/verify" component={verify} />
            
            <Route exact path="/sites/Benguet" component={itogon} /> */}
            {/* <Router basename="/" /> */}
            <Route exact path="/map" component={Dashboard} />
            <Route path="/" component={LandingPage} />
            
            <Route exact component={notfound} />

            

            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
