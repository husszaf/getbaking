import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';

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
            <Nav.Link as={Link} to="/bake">Bake</Nav.Link>
            <Nav.Link as={Link} to="/recent">Recent Recipes</Nav.Link>
            <Nav.Link as={Link} to="/mesaurmentConverter">Mesaurement Converter</Nav.Link>
            
            
            {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default theNavbar;