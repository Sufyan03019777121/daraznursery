import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Col, Row, Image } from 'react-bootstrap';
import axios from 'axios';

const AdminDashboard = () => {
  const [accessGranted, setAccessGranted] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
  });

  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5000/api/products');
    setProducts(res.data);
  };

  useEffect(() => {
    if (accessGranted) {
      fetchProducts();
    }
  }, [accessGranted]);

  const handleLogin = () => {
    if (passwordInput === '..saqib..') {
      setAccessGranted(true);
    } else {
      alert('غلط پاسورڈ! دوبارہ کوشش کرو۔');
    }
  };

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
    if (productData.image) {
      formData.append('image', productData.image);
    }

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/products/${editId}`, formData);
        setEditId(null);
      } else {
        await axios.post('http://localhost:5000/api/products', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }
      setProductData({ name: '', price: '', description: '', image: null });
      fetchProducts();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleEdit = (product) => {
    setProductData({
      name: product.name,
      price: product.price,
      description: product.description,
      image: null,
    });
    setEditId(product._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      fetchProducts();
    }
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const truncateText = (text, maxLength = 60) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  if (!accessGranted) {
    return (
      <Container className="mt-5 text-center">
        <h4>🔐 Admin Access Required</h4>
        <Form.Control
          type="password"
          placeholder="Enter Admin Password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          style={{ maxWidth: '300px', margin: '10px auto' }}
        />
        <Button variant="success" onClick={handleLogin}>
          Submit
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h4 className="text-success text-center">Admin Dashboard</h4>
      <h4 className="text-primary text-center">{editId ? 'Update Product' : 'Add Product'}</h4>

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
          <Form.Control type="file" name="image" onChange={handleFileChange} />
        </Form.Group>
        <Button type="submit" variant={editId ? 'warning' : 'primary'} className="mt-3">
          {editId ? 'Update Product' : 'Add Product'}
        </Button>
      </Form>

      <h5 className="mt-5">
        All Products <span className="text-muted">(Total: {filteredProducts.length})</span>
      </h5>

      <Form.Control
        type="text"
        placeholder="Search by product name..."
        className="my-4"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Row>
        {filteredProducts.map((item, index) => (
          <Col xs={12} sm={6} md={4} key={item._id} className="mb-4">
            <div className="border p-3 rounded shadow-sm h-100">
              <div className="d-flex align-items-center mb-2">
                <strong className="me-2">{index + 1}.</strong>
                <h6 className="mb-0">{item.name}</h6>
              </div>
              <Image
                src={`http://localhost:5000/${item.image}`}
                fluid
                rounded
                style={{ height: 'auto', objectFit: 'cover', width: '100%' }}
              />
              <p className="mt-2 mb-1 text-muted">Rs {item.price}</p>
              <p style={{ fontSize: '14px' }}>{truncateText(item.description)}</p>
              <div className="d-flex justify-content-between">
                <Button variant="success" size="sm" onClick={() => handleEdit(item)}>
                  Edit
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(item._id)}>
                  Delete
                </Button>
              </div>
            </div>
          </Col>
        ))}
        {filteredProducts.length === 0 && (
          <p className="text-center text-muted">کوئی پروڈکٹ نہیں ملی۔</p>
        )}
      </Row>
    </Container>
  );
};

export default AdminDashboard;
