import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>PKR {product.price}</Card.Text>
        <Button as={Link} to={`/product/${product.id}`} variant="success">Details</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;