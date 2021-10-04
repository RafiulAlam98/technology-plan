import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import HomeCourse from '../HomeCourse/HomeCourse';
import useFreeCourse from '../UseFreeCourseDb/UseFreeCourseDb';
import './Home.css';


// Home component with carousel Slide
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
              src="https://media.istockphoto.com/photos/the-student-life-picture-id862661268?b=1&k=20&m=862661268&s=170667a&w=0&h=SQ2yAt1TLD6zg_AiAbZdmApZ8N0CmfGRWE_c52LBd6w="
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
        <div className="d-flex flex-wrap mt-4 align-content-around mb-4 justify-content-around">
          {freeCourses.map(freeCourse => (
            <HomeCourse freeCourse={freeCourse}></HomeCourse>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
