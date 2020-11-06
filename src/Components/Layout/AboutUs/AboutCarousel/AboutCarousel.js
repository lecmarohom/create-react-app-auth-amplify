import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import classes from './AboutCarousel.module.css';

const items = [
  {
    src: require('../../../../Assets/images/about/slide1.jpg'),
    altText: 'Assess the impact of climate change',
    caption:
      'on landslide and sedimentation'
  },
  {
    src: require('../../../../Assets/images/about/slide2.jpg'),
    altText: 'Develop and Test Models',
    caption: 'of landslides and downstream sedimentation'
  },
  {
    src: require('../../../../Assets/images/about/slide3.jpg'),
    altText: 'Quantify rates of sediment delivery ',
    caption: 'by landslides and transport of sediment in rivers'
  },
  {
    src: require('../../../../Assets/images/about/slide4.jpg'),
    altText: 'Identify multi-landslide events',
    caption: 'and their meteorological drivers and preconditioning factors'
  }
];

const AboutCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div
          style={{ backgroundImage: `url(${item.src})` }}
          alt={item.altText}
          className={classes.ImageContainer}
        />
        <CarouselCaption
          captionHeader={item.altText}
          captionText={item.caption}
          className={classes.Caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className={classes.Carousel}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default AboutCarousel;
