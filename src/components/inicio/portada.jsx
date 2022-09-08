import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://media.gq.com.mx/photos/6318e52b15901f2fd6bf379e/16:9/w_2560%2Cc_limit/iphone%252014.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Exclusividad</h3>
          <p>Somos la tienda con las fundas mas exclusivas</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://i.ytimg.com/vi/Khfc1BdAu2g/maxresdefault.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Durabilidad</h3>
          <p>
            No dejes al descubierto eso que tanto cuidas
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;