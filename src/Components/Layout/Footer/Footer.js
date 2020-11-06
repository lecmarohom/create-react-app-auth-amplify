import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Footer.module.css';
import Logo from '../../../Assets/images/logo.png';

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <Container>
        <Row className={classes.Top}>
          <Col md="6" lg="4" className={classes.Contact}>
            <h3>Mapúa SCaRP Project</h3>
            <p>
              RRm1, Yuchengco Innovation Center, <br />
              Mapúa University, 658 Muralla St., <br />
              Intramuros, Manila 1002, Philippines <br />
              <br />
              <strong>Phone:</strong> +63(2) 8247-5000 <br />
              <strong>Email:</strong> scarpmtdews@gmail.com
            </p>
          </Col>
          <Col sm="6" md="3" lg="2" className={classes.Links}>
            <h4>Useful Links</h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={['fas', 'angle-right']} />
                <Link to="./home">Home</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={['fas', 'angle-right']} />
                <Link to="./aboutus">About us</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={['fas', 'angle-right']} />
                <Link to="./gallery">Gallery</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={['fas', 'angle-right']} />
                <Link to="./contactus">Contact Us</Link>
              </li>
            </ul>
          </Col>
          <Col sm="6" md="3" lg="2" className={classes.Links}>
            <h4>Projects</h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={['fas', 'angle-right']} />
                <Link to="./c2">C2 Project</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={['fas', 'angle-right']} />
                <Link to="./royal">Royal Project</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={['fas', 'angle-right']} />
                <Link to="./mtdews">MtDews Project</Link>
              </li>
            </ul>
          </Col>
          <Col md="12" lg="4" className={classes.NewsLetter}>
            <img src={Logo} alt="Scarp Logo" />
            <p>SCaRP Project</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className={classes.Bottom}>
          <Col md="6">
            <div className={classes.Copyright}>
              &copy; Copyright{' '}
              <strong>
                <span>Mapúa SCaRP</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className={classes.Credits}>
              Designed by <a href="./">MtDews</a>
            </div>
          </Col>
          <Col md="6" className={classes.SocialLinks}>
            <a href="./" className="twitter">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a href="./" className="facebook">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>
            <a href="./" className="instagram">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
            <a href="./" className="google-plus">
              <FontAwesomeIcon icon={['fab', 'skype']} />
            </a>
            <a href="./" className="linkedin">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
