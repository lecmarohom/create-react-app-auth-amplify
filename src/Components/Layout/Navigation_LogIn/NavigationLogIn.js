import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Logo from '../../../Assets/logo.png';
import classes from './NavigationLogIn.module.css';
import { Auth } from 'aws-amplify'
// import login from '../../User/login';
// import AboutUs from '../AboutUs/AboutUs';
// import ContactUs from '../ContactUs/ContactUs';
// import Portfolio from '../Portfolio/Portfolio';
// import Homepage from '../Homepage/Homepage';

const NavigationLogIn = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleLogOut = async event => {
    event.preventDefault();
    try{
      Auth.signOut();
      props.auth.setAuthStatus(false);
      props.auth.setUser(null);
    }catch(error){
      console.log(error.message);
    }
  }


  return (
    <Navbar light expand="md" className={classes.Navbar}>
      <NavbarBrand href="/" className={classes.NavbarBrand}>
        <img src={Logo} className={classes.NavbarLogo} alt="Scarp Logo" />
        SCaRP Project
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <div className={classes.Hello}> 
            {props.auth.isAuthenticated && props.auth.user && (
               <p>Hello {props.auth.user.username}! </p>
            )}
            {/* Hello sasa */}
          </div>
              <NavItem>
                <Link to="/" className={'nav-link ' + classes.NavLink}>
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/aboutus" className={'nav-link ' + classes.NavLink}>
                  About Us
                </Link>
              </NavItem>
              <NavItem>
                <NavLink href="/Gallery" className={classes.NavLink}>
                  Gallery
                </NavLink>
              </NavItem>
              <NavItem>
                <Link to="/map" className={'nav-link ' + classes.NavLink}>
                  Map
                </Link>
              </NavItem>
              <NavItem>
                <NavLink href="/ContactUs" className={classes.NavLink}>
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" onClick={handleLogOut} className={classes.NavLink}>
                  Sign Out
                </NavLink>
              </NavItem>

          
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavigationLogIn;
