import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Logo from '../../Assets/logo.png';
import login from '../User/login';

const NavBar_guest = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className="nav-border-bottom">
        <NavbarBrand href="/" className="text-color5 font-weight-bold">
          <img src={Logo} className="navbar-logo" alt="Scarp Logo" />
          SCaRP Project
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/map/guest/SensorData" className="text-color5">
                Sensor Data
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/map/guest/FlowData" className="text-color5">
                Flow Data
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/SignIn" className="text-color5" onClick={login}>
                Sign In
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar_guest;
