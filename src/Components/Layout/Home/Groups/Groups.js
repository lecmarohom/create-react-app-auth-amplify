import React from 'react';
import { Row, Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

// Styles
import classes from './Groups.module.css';

// Images
import scarp from '../../../../Assets/images/logo.png';

const Groups = (props) => {
  return (
    <Row className={classes.Groups}>
      <Col>
        <ScrollAnimation animateIn="animate__slideInUp" delay={100}>
          <div className={classes.Group}>
            <div className={classes.Logo}>
              <img src={scarp} alt="C2 Logo" />
            </div>
            <h4 className={classes.Title}>Royal</h4>
            <p className={classes.Description}>
            Identify multi-landslide events and their meteorological drivers and preconditioning factors over the Philippines.
            </p>
          </div>
        </ScrollAnimation>
      </Col>
      <Col>
        <ScrollAnimation animateIn="animate__slideInUp" delay={200}>
          <div className={classes.Group}>
            <div className={classes.Logo}>
              <img src={scarp} alt="Roayl Logo" />
            </div>
            <h4 className={classes.Title}>C2</h4>
            <p className={classes.Description}>
            Quantify rates of sediment delivery by landslides and transport of sediment in rivers and 
            Assess the impact of climate change on landslide and sedimentation in the Philippines

            </p>
          </div>
        </ScrollAnimation>
      </Col>
      <Col>
        <ScrollAnimation animateIn="animate__slideInUp" delay={300}>
          <div className={classes.Group}>
            <div className={classes.Logo}>
              <img src={scarp} alt="MtDews Logo" />
            </div>
            <h4 className={classes.Title}>Mtdews</h4>
            <p className={classes.Description}>
            Developed the early warning system via a dynamic website portal for landslide hazards in the Philippines.
            </p>
          </div>
        </ScrollAnimation>
      </Col>
    </Row>
  );
};

export default Groups;
