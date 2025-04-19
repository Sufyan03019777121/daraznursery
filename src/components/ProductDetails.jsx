import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error('Error fetching product:', err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <Image src={`http://localhost:5000/${product.image}`} alt={product.name} fluid rounded />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>Price: Rs {product.price}</h4>
          <Button as={Link} to={`https://wa.me/923094282079?text=Hello%2C%20I%20am%20interested%20in%20buying%20the%20Aloe%20Vera%20plant.%20Can%20you%20give%20me%20more%20details%3F"`} variant="success mx-2 mt-3">Whatsapp</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
