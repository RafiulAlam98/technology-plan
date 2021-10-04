import React from 'react';
import { Card } from 'react-bootstrap';

const Instructor = props => {
  const { img, name, designation } = props.instructor;
  return (
    <Card className="card-container mb-4" style={{ width: '18rem' }}>
      <img src={img} className="fluid rounded" alt="" />
      <Card.Body className="P-2 ms-4 mb-2">
        <Card.Title> {name}</Card.Title>
        <Card.Title> {designation}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Instructor;
