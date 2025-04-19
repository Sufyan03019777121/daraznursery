import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar as BSNavbar } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BSNavbar bg="success" variant="dark" expand="lg">
      <Container>
        <BSNavbar.Brand as={Link} to="/">🌿 DarazNursery Shop</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-white">
            <Nav.Link as={Link} to="/"
              className="text-light"
            >Home</Nav.Link>
            {/* <Nav.Link as={Link} to="/checkout" className="text-light">Checkout</Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-light">Login</Nav.Link> */}
            <Nav.Link as={Link} to="/admin" className="text-light">Admin</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;