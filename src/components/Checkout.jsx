import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [order, setOrder] = useState({
    name: '',
    mobile: '',
    address: '',
    paymentMethod: 'easypaisa'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/orders', order);
      alert('Order placed successfully!');
    } catch (err) {
      console.error(err);
      alert('Error placing order');
    }
  };

  return (
    <Container className="mt-4">
      <h2 className='text-primary'>Checkout</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={order.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="mobile">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={order.mobile}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="address"
            value={order.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="paymentMethod">
          <Form.Label>Payment Method</Form.Label>
          <Form.Control
            as="select"
            name="paymentMethod"
            value={order.paymentMethod}
            onChange={handleChange}
          >
            <option value="easypaisa">EasyPaisa</option>
            <option value="jazzcash">JazzCash</option>
            <option value="cod">Cash on Delivery</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit" variant="success" className="mt-3">
          Place Order
        </Button>
        <Button as={Link} to={`https://wa.me/923094282079?text=Hello%2C%20I%20am%20interested%20in%20buying%20the%20Aloe%20Vera%20plant.%20Can%20you%20give%20me%20more%20details%3F"`} variant="primary mx-2 mt-3">Whatsapp</Button>
      </Form>
    </Container>
  );
};

export default Checkout;