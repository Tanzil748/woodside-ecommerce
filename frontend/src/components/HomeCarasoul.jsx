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
            <h1 className="fw-bolder " style={{ color: "#f7ebe1" }}>
              Our Fresh Produce
            </h1>
            <p className="fw-bolder" style={{ color: "#f7ebe1" }}>
              We obtain our produce and baked goods exclusively from farmers and
              local bakeries.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carourselItem">
          <Image
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1609780447631-05b93e5a88ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt="Second slide"
          />

          <Carousel.Caption className="position-absolute top-50 start-50 translate-middle">
            <h1 className="fw-bolder " style={{ color: "#f4f4f6" }}>
              Empowering Farmers
            </h1>
            <p className="fw-bolder" style={{ color: "#f4f4f6" }}>
              Our business model prioritizes supporting local farmers and small
              businesses.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carourselItem">
          <Image
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt="Third slide"
          />

          <Carousel.Caption className="position-absolute top-50 start-50 translate-middle">
            <h1 className="fw-bolder " style={{ color: "#e9e3e6" }}>
              Fair Prices
            </h1>
            <p className="fw-bolder" style={{ color: "#e9e3e6" }}>
              We price match our 100% organic fruits and vegetables!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarasoul;
