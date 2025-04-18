import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const dummyProducts = [
  { id: 1, name: 'Aloe Vera', price: 300, image: 'https://via.placeholder.com/150'},
  { id: 2, name: 'Money Plant', price: 500, image: 'https://via.placeholder.com/150' },
];

const Home = () => {
  return (
    <Container className="my-4">
      <h2 className='text-success'>🌱 Featured Plants</h2>
      <Row>
        {dummyProducts.map(product => (
          <Col key={product.id} sm={6} md={6}>
            <ProductCard product={product}  />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;