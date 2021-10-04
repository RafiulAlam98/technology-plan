import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import HomeCourse from '../HomeCourse/HomeCourse';
import useFreeCourse from '../UseFreeCourseDb/UseFreeCourseDb';
import './Home.css';

const Home = () => {
  const [freeCourses] = useFreeCourse();
  return (
    <div>
      <section>
        <Carousel fade>
          <Carousel.Item className="carousel">
            <img
              className="fluid rounded carousel-img"
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="fluid rounded carousel-img"
              src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="fluid rounded carousel-img"
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </section>

      <section>
        <div className="d-flex mt-4 justify-content-around">
          {freeCourses.map(freeCourse => (
            <HomeCourse freeCourse={freeCourse}></HomeCourse>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
