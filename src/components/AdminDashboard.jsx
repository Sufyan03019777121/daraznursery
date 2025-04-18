import React, { useState } from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';

const AdminDashboard = () => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleFileChange = (e) => {
    setProductData({ ...productData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('price', productData.price);
    formData.append('description', productData.description);
    formData.append('image', productData.image);

    try {
      const response = await axios.post('/api/products', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Product added:', response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Admin Dashboard - Add Product</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="name">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={productData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={productData.price}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            onChange={handleFileChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">
          Add Product
        </Button>
      </Form>
    </Container>
  );
};

export default AdminDashboard;