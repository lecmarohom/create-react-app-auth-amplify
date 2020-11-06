import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import classes from './Carousel.module.css';

const items = [
  {
    src: require('../../../../Assets/images/carousel/slide1.jpg'),
    altText: 'Nature speaks',
    caption:
      'Nature shows impending danger. All we need to do is listen and understand the signs'
  },
  {
    src: require('../../../../Assets/images/carousel/slide2.jpg'),
    altText: 'Pre and Post Landslide Event',
    caption: 'Biliran, Eastern Samar'
  },
  {
    src: require('../../../../Assets/images/carousel/slide3.jpg'),
    altText: 'Project Site Inspection',
    caption: 'Understanding and inspecting real events for better result'
  }
];

const HomeCarousel = (props) => {
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

export default HomeCarousel;
