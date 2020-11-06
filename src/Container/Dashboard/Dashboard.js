import React, { Component, Fragment } from 'react';

import Mapping from '../../Components/Mapping/Mapping';

import Navbar from '../../Components/Layout/Navigation/Navigation';
import Sidebar from '../../Components/Layout/Sidebar/Sidebar';
// import Weather from '../../Components/WeatherWidget/WeatherWidget';

import classes from './Dashboard.module.css';

class Dashboard extends Component {
  state = {
    zoom: 6,
    sidebar: {
      mtDews: {
        show: true,
        baseStation: true,
        sites: true
      }
    }
  };

  handleZoomChange = (value) => {
    this.setState({ zoom: value });
  };

  handleSideBarUpdate = (value) => {
    this.setState({ sidebar: value });
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className={classes.Container}>
          <Sidebar
            zoomLevel={this.state.zoom}
            checkBoxValue={this.state.sidebar}
            onCheckBoxUpdate={this.handleSideBarUpdate}
          />

          <Mapping
            zoomLevel={this.state.zoom}
            onZoomChange={this.handleZoomChange}
            sideBarValue={this.state.sidebar}
          />
        </div>

        <div className={classes.Footer}>
          <p>&copy;Mapúa SCaRP Project 2020</p>
        </div>
        {/* <Weather /> */}
      </Fragment>
    );
  }
}

export default Dashboard;
