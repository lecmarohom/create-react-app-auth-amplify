import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import * as Icons from "@fortawesome/fontawesome-free-solid"

const sidebar = (props) => {
  return (
    <div className="sidebar">
      <Nav vertical>
        <NavItem>
          <NavLink href="/FlowData">
            <FontAwesomeIcon icon="sitemap" className="sidebar-icon" />
            <p className="sidebar-text">Flow Data</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/SensorData">
            <FontAwesomeIcon icon="chart-bar" className="sidebar-icon" />
            <p className="sidebar-text">Sensor data</p>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default sidebar;
