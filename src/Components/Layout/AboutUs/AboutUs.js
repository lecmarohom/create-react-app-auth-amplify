import React from 'react';
import { Container } from 'reactstrap';
import AboutProject from './AboutProject/AboutProject';
import AboutPartners from './AboutPartners/AboutPartners';
import Carousel from './AboutCarousel/AboutCarousel';

export default function AboutUs() {
  return (
    <React.Fragment>
      <Carousel />
      <Container>
        <AboutProject />
        <AboutPartners />
      </Container>
    </React.Fragment>
  );
}
