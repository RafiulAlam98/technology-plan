import React from 'react';
import Service from '../Service/Service';
import useFakeDbServices from '../UseFakeDbServices/UseFakeDbServices';

const Services = () => {
  const [services] = useFakeDbServices();
  console.log(services);
  return (
    <div className="d-flex flex-wrap mt-4 align-content-around mb-4 justify-content-around">
      {services.map(service => (
        <Service service={service}></Service>
      ))}
    </div>
  );
};

export default Services;
