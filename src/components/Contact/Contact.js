import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Instructor from '../Instructor/Instructor';
import './Contact.css';

// hook declared
const Contact = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch('./fakeContactDb.json')
      .then(res => res.json())
      .then(data => setInstructors(data));
  }, []);

  return (
    <div>
      <h1 className="contact-header">MEET OUR INSTRUCTORS</h1>
      <div className="d-flex flex-wrap mt-4 align-content-around mb-4 justify-content-around">
        {instructors.map(instructor => (
          <Instructor key={instructor.id} instructor={instructor}></Instructor>
        ))}
      </div>
    </div>
  );
};

export default Contact;
