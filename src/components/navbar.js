import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function theNavbar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className='border-left pl-2'>Get Baking!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center" style={{ flex: 1}}>
            <Nav.Link as={Link} to="/popular">Popular</Nav.Link>
            <Nav.Link as={Link} to="/seasonal">Seasonal Recipes</Nav.Link>
            <Nav.Link as={Link} to="/bake">Recipe Builder</Nav.Link>
            <Nav.Link as={Link} to="/recent">Recent Recipes</Nav.Link>
            <Nav.Link as={Link} to="/CountdownTimer">Countdown Timer</Nav.Link>
            <Nav.Link as={Link} to="/mesaurmentConverter">Mesaurement Converter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default theNavbar;