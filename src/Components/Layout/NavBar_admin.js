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

const NavBar_admin = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/" className="text-color5 font-weight-bold">SCaRP Project</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/admin/SensorData" className="text-color5" >Sensor Data Admin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/FlowData" className="text-color5" >Flow Data admin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="text-color5" >Sign Out</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar_admin;