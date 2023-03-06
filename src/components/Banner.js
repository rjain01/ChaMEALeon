import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Banner.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} id='banner-carousel'>
      <Carousel.Item>
        <img
          className="banner-image"
          src= 'https://picsum.photos/1530/400'
          alt="First Slide"
        />
        <Carousel.Caption>
          <h3>Take the stress out of meal time.Ready to cook meal along with its recipe</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-image"
          src= 'https://picsum.photos/1530/400'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Full satisfaction of home-made food.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-image"
          src= 'https://picsum.photos/1530/400'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>50% off on your first purchase</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel