import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Img variant="top" src={product.image || 'https://via.placeholder.com/150'} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>PKR {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
