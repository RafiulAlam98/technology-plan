import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import useFakeDb from '../UseFakeDb/UseFakeDb';

const About = () => {
  // get hook state by my own hook component function
  const [courses] = useFakeDb();
  return (
    <div className="d-flex flex-wrap mt-4 align-content-around mb-4 justify-content-around">
      {courses.map(course => (
        <AboutUs key={course.id} course={course}></AboutUs>
      ))}
    </div>
  );
};

export default About;
