import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import "../styles/homecarousel.css";

const HomeCarasoul = () => {
  return (
    <div className="container-xxl px-0">
      <Carousel fade>
        <Carousel.Item className="carourselItem position-relative">
          <Image
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1576398289164-c48dc021b4e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt="First slide"
          />
          <Carousel.Caption className="position-absolute top-50 start-50 translate-middle">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carourselItem">
          <Image
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1609780447631-05b93e5a88ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt="Second slide"
          />

          <Carousel.Caption className="position-absolute top-50 start-50 translate-middle">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carourselItem">
          <Image
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt="Third slide"
          />

          <Carousel.Caption className="position-absolute top-50 start-50 translate-middle">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarasoul;
