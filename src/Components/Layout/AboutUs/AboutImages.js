import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import classes from './AboutUs.module.css'



const items = [
  // {
  //   id: 1,
  //   src: require('../../../Assets/images/Pic1_resize.jpg'),
  //   altText: 'SCaRP Presentation',
  //   caption: 'Our Partners'
  // },
  {
    id: 2,
    src: require('../../../Assets/images/Pic2_resize.jpg'),
    altText: 'The heads',
    caption: 'Engr. Fibor J. Tan and Dr. Georgina Bennettt'
  },
  {
    id: 3,
    src: require('../../../Assets/images/Pic3_resize.jpg'),
    altText: 'The Reconnaissance',
    caption: 'Itogon Site with Philippines and United Kingdom team'
  },
  {
    id: 4,
    src: require('../../../Assets/images/Pic4_resize.jpg'),
    altText: 'The Team',
    caption: 'SCaRP Philippines Research Team'
  },
];

const AboutDisplay = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
       
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption className={classes.altText} captionText={item.altText} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <React.Fragment>
      <div className={classes.CustomTag}>
      {/* if account is admin? Navbar_guest : Navbar_admin*/}
      {/* < NavBar_guest /> */}
      <div className={classes.ImageBar}>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      </div>
    </div>
    </React.Fragment>
    
  );
}
export default AboutDisplay;