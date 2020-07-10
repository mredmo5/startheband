import React from 'react'
import {Carousel} from 'react-bootstrap';
import star1 from '../../assets/images/star1.jpg';
import star5 from '../../assets/images/star5.jpg';
import star6 from '../../assets/images/star6.jpg';

 
const carouselItem = () => (

<div className='container'>


<Carousel>
  <Carousel.Item>
    <img
      className={"d-block w-100 h-50"}
      src={star1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={star5}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={star6}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
)
   
  export default carouselItem