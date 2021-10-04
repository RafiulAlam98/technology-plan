import { useEffect } from 'react';
import { useState } from 'react';

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
