import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  Input,
  UncontrolledCollapse,
  Badge
} from 'reactstrap';

import classes from './Sidebar.module.css';

const Sidebar = (props) => {
  const mtdew_sites = {
    checked: props.checkBoxValue.mtDews.sites,
    disabled: !(props.zoomLevel >= 10)
  };

  const handleUpdate = (name) => {
    let currentState = { ...props.checkBoxValue };
    switch (name) {
      case 'mtDews':
        currentState.mtDews.show = !currentState.mtDews.show;
        break;
      case 'mtDews_baseStation':
        currentState.mtDews.baseStation = !currentState.mtDews.baseStation;
        break;
      case 'mtDews_sites':
        currentState.mtDews.sites = !currentState.mtDews.sites;
        break;
      default:
        break;
    }
    props.onCheckBoxUpdate(currentState);
  };
  return (
    <div className={classes.Sidebar}>
      <ListGroup flush>
        <ListGroupItem className={classes.ListItem}>
          <h5>Layers</h5>
        </ListGroupItem>
        <ListGroupItem className={classes.ListItem}>
          <Badge color="dark" id="toggler1" className={classes.BtnCollapse}>
            +
          </Badge>
          <Input type="checkbox" />
          Royal
          <UncontrolledCollapse toggler="#toggler1">
            <ListGroup flush>
              <ListGroupItem className={classes.ListItem}>
                <Input type="checkbox" />
                Safe
              </ListGroupItem>
              <ListGroupItem className={classes.ListItem}>
                <Input type="checkbox" />
                Warning
              </ListGroupItem>
              <ListGroupItem className={classes.ListItem}>
                <Input type="checkbox" />
                Danger
              </ListGroupItem>
            </ListGroup>
          </UncontrolledCollapse>
        </ListGroupItem>
        <ListGroupItem className={classes.ListItem}>
          <Badge color="dark" id="toggleC2" className={classes.BtnCollapse}>
            +
          </Badge>
          <Input type="checkbox" />
          C2
          <UncontrolledCollapse toggler="#toggleC2">
            <ListGroup flush>
              <ListGroupItem className={classes.ListItem}>
                <Input type="checkbox" />
                Safe
              </ListGroupItem>
              <ListGroupItem className={classes.ListItem}>
                <Input type="checkbox" />
                Warning
              </ListGroupItem>
              <ListGroupItem className={classes.ListItem}>
                <Input type="checkbox" />
                Danger
              </ListGroupItem>
            </ListGroup>
          </UncontrolledCollapse>
        </ListGroupItem>
        <ListGroupItem className={classes.ListItem}>
          <Badge color="dark" id="t_MtDews" className={classes.BtnCollapse}>
            +
          </Badge>
          <Input
            type="checkbox"
            onChange={() => handleUpdate('mtDews')}
            checked={props.checkBoxValue.mtDews.show}
          />
          MtDews
          <UncontrolledCollapse toggler="#t_MtDews">
            <ListGroup flush>
              <ListGroupItem className={classes.ListItem}>
                <Input
                  type="checkbox"
                  onChange={() => handleUpdate('mtDews_baseStation')}
                  checked={props.checkBoxValue.mtDews.baseStation}
                />
                BaseStation
              </ListGroupItem>
              <ListGroupItem className={classes.ListItem}>
                <Input
                  type="checkbox"
                  onChange={() => handleUpdate('mtDews_sites')}
                  checked={mtdew_sites.checked}
                  disabled={mtdew_sites.disabled}
                />
                Sites
              </ListGroupItem>
              {/* <ListGroupItem className={classes.ListItem}>
                <Badge
                  color="dark"
                  id="t_MtDews_Sensor"
                  className={classes.BtnCollapse}
                >
                  +
                </Badge>
                <Input type="checkbox" />
                Sensors
                <UncontrolledCollapse toggler="#t_MtDews_Sensor">
                  <ListGroup flush>
                    <ListGroupItem className={classes.ListItem}>
                      <Input type="checkbox" />
                      Rain Rate
                    </ListGroupItem>
                    <ListGroupItem className={classes.ListItem}>
                      <Input type="checkbox" />
                      Soil Moiture
                    </ListGroupItem>
                    <ListGroupItem className={classes.ListItem}>
                      <Input type="checkbox" />
                      Temperature
                    </ListGroupItem>
                  </ListGroup>
                </UncontrolledCollapse>
              </ListGroupItem> */}
            </ListGroup>
          </UncontrolledCollapse>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
