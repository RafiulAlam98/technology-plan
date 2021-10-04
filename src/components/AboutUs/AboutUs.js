import React from 'react';
import { Card } from 'react-bootstrap';

const AboutUs = props => {
  const { img, title } = props.course;
  return (
    <Card className="card-container" style={{ width: '18rem' }}>
      <img src={img} className="fluid rounded" alt="" />
      <Card.Body className="P-2 ms-4 mb-2">
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <button className="card-button ms-4 mb-2">MORE INFO</button>
    </Card>
  );
};

export default AboutUs;
