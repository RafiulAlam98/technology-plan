import { useEffect } from 'react';
import { useState } from 'react';

// creating hook component for fake db

const useFakeDb = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('./fakeDb.json')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);
  return [courses, setCourses];
};

export default useFakeDb;
