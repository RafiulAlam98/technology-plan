import { useEffect } from 'react';
import { useState } from 'react';

// creating my own hook component using fake db

const useFreeCourse = () => {
  const [freeCourses, setFreeCourses] = useState([]);
  useEffect(() => {
    fetch('./freeCourseDb.json')
      .then(res => res.json())
      .then(data => setFreeCourses(data));
  }, []);
  return [freeCourses, setFreeCourses];
};

export default useFreeCourse;
