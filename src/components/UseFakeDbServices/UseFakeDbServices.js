import { useEffect } from 'react';
import { useState } from 'react';

// creating hook using fake db

const useFakeDbServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./fakeDb2.json')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return [services, setServices];
};

export default useFakeDbServices;
