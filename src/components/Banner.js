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
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First sliddjkwbdkjwbdke label</h3>
          <p>Nulla vitae elit ld wbdjibero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-image"
          src= 'https://picsum.photos/1530/400'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Second</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-image"
          src= 'https://picsum.photos/1530/400'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;