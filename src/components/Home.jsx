import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
      });
  }, []);

  const filteredProducts = [...products]
    .filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <Container className="mt-4">
      <h2 className="text-center text-success mb-4">All Products</h2>

      {/* 🔍 Search Bar */}
      <Form.Control
        type="text"
        placeholder="Search plants by name..."
        className="mb-4"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Row>
        {filteredProducts.map((item) => (
          <Col key={item._id} xs={12} md={6} lg={6} className="mb-4">
            <Card>
              <Card.Img 
                variant="top" 
                src={`http://localhost:5000/${item.image}`} 
                style={{ height: 'auto', objectFit: 'cover' }} 
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description.slice(0, 60)}...</Card.Text>
                <h5>Rs. {item.price}</h5>
                <div className="d-flex">
                  <Link to={`/product/${item._id}`}>
                    <Button variant="primary">View Details</Button>
                  </Link>
                  <a 
                    href={`https://wa.me/923094282079?text=Hello%2C%20I%20am%20interested%20in%20buying%20the%20${encodeURIComponent(item.name)}.%20Can%20you%20give%20me%20more%20details%3F`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ms-2"
                  >
                    <Button variant="success">Whatsapp</Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {filteredProducts.length === 0 && (
          <p className="text-center text-muted">😢 کوئی پروڈکٹ نہیں ملی۔</p>
        )}
      </Row>
    </Container>
  );
};

export default Home;
