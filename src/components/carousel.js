import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function AutoSlideCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_960_720.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to Get Baking!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2017/11/24/20/01/christmas-cookies-2975570_960_720.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Welcome to Get Baking!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/11/22/21/28/cupcakes-1850628_960_720.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Welcome to Get Baking!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AutoSlideCarousel;