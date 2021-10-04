import React from 'react';
import { Card } from 'react-bootstrap';
import './HomeCourse.css';

const HomeCourse = props => {
  console.log(props);
  const { title, img, price } = props.freeCourse;

  return (
    <Card className="card-container" style={{ width: '18rem' }}>
      <img src={img} className="fluid rounded" alt="" />
      <Card.Body className="P-2 ms-4 mb-2">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
      <button className="card-button ms-4 mb-2">BUY NOW</button>
    </Card>
  );
};

export default HomeCourse;
