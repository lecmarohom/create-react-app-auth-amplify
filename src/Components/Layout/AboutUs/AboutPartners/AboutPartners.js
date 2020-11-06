import React, { Component } from 'react';
import classes from './AboutPartners.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import PartnersLogo from '../../../../Assets/images/PartnersLogo.jpg';

export default class AboutPartners extends Component {
  render() {
    return (
      <div>
        <ScrollAnimation animateIn="animate__fadeInLeft">
        <h1>Our Partners</h1>
        </ScrollAnimation>
        

        <ScrollAnimation animateIn="animate__fadeInRight">
        <div className={classes.PartnersImage}>
          <img src={PartnersLogo} alt="Partner Logo" />
        </div>
        </ScrollAnimation>
      </div>
    );
  }
}
