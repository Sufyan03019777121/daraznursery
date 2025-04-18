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
        <Button as={Link} to={`/product/${product.id}`} variant="primary">Details</Button>
        <Button as={Link} to={`https://wa.me/923094282079?text=Hello%2C%20I%20am%20interested%20in%20buying%20the%20Aloe%20Vera%20plant.%20Can%20you%20give%20me%20more%20details%3F"`} variant="success mx-2">Whatsapp</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;