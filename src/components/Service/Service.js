import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css';

const Service = props => {
  console.log(props.service);
  const { img, title, description, price } = props.service;
  return (
    <div>
      <Card
        className="card-container mb-4"
        style={{ width: '18rem', height: '30rem' }}
      >
        <img src={img} className="fluid rounded" alt="" />
        <Card.Body className="P-2 ms-4 mb-2">
          <Card.Title className="color">{title}</Card.Title>
          <Card.Text>Description: {description}</Card.Text>
          <Card.Text>
            Price:<span className="color"> {price}</span>{' '}
          </Card.Text>
        </Card.Body>
        <button className="card-button ms-4 mb-2">BUY NOW</button>
      </Card>
    </div>
  );
};

export default Service;
