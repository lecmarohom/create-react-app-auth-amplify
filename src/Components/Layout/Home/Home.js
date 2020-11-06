import React, { Fragment } from 'react';

import { Row, Col, Container, NavLink } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
// Styles
import classes from './Home.module.css';

// Components
import Carousel from './Carousel/Carousel';
import Groups from './Groups/Groups';

// Images
import dost from '../../../Assets/images/team/dost.png';
import nerc from '../../../Assets/images/team/nerc.png';
import mapua from '../../../Assets/images/team/mapua.png';
import exeter from '../../../Assets/images/team/exeter.png';

const Home = (props) => {
  return (
    <Fragment>
      <Carousel />

      <Container>
        <Groups />
      </Container>

      <Container className={classes.ProjectAreas}>
        <Row>
          <Col md="6">
            <ScrollAnimation animateIn="animate__slideInLeft">
              <h3>Project Areas</h3>
              <p>These are the areas covered by the project</p>
              <ul>
                <NavLink>Ilocos Norte</NavLink>
                <NavLink href='/sites/Benguet'>Benguet</NavLink>
                <NavLink>Isabela</NavLink>
                <NavLink>Quezon</NavLink>
                <NavLink>Biliran</NavLink>
                <NavLink>Bukidnon</NavLink>
                <NavLink>Cebu</NavLink>
              </ul>
            </ScrollAnimation>
          </Col>
          <Col md="6">
            <ScrollAnimation
              animateIn="animate__slideInRight"
              className={classes.MapContainer}
            >
              <div
                className={'d-sm-none d-md-block ' + classes.ProjectMap}
              ></div>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
      <Container className={classes.Teams}>
        <ScrollAnimation animateIn="animate__slideInUp">
          <h3>Our Team</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__slideInUp" delay={200}>
          <p>These are the group of people that makes this project possible</p>
        </ScrollAnimation>
        <Row>
          <Col sm="6" md={{ size: 2, offset: 2 }} className={classes.Team}>
            <ScrollAnimation animateIn="animate__slideInUp" delay={200}>
              <img src={dost} alt="DOST" />
            </ScrollAnimation>
          </Col>
          <Col sm="6" md="2" className={classes.Team}>
            <ScrollAnimation animateIn="animate__slideInUp" delay={300}>
              <img src={nerc} alt="UK Natural Environment Research Council" />
            </ScrollAnimation>
          </Col>
          <Col sm="6" md="2" className={classes.Team}>
            <ScrollAnimation animateIn="animate__slideInUp" delay={400}>
              <img src={mapua} alt="Mapúa University" />
            </ScrollAnimation>
          </Col>
          <Col sm="6" md="2" className={classes.Team}>
            <ScrollAnimation animateIn="animate__slideInUp" delay={500}>
              <img src={exeter} alt="University of Exeter" />
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
