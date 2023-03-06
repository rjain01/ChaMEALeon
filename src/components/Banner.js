import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Banner.css'
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'

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
          src= {banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Take the stress out of meal time.Ready to cook meal along with its recipe</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-image"
          src={banner2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Full satisfaction of home-made food.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-image"
          src={banner3}
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