import React, {useState} from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap';

import {makeStyles} from "@material-ui/core/styles"
import {Drawer, Container} from '@material-ui/core'
import {Router} from 'react-router-dom';
import * as Icons from "@fortawesome/fontawesome-free-solid"

const sidebar_guest = (props) => {
    return (
        <div className="sidebar">
            <p>List Based</p>
            <Nav vertical>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/SensorData">Flow Data</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/FlowData">Sensor data</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
};

export default sidebar_guest;
