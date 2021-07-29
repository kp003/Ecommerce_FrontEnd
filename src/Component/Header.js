import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">TechNova</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/aboutus">About Us</Nav.Link>
      <Nav.Link href="/product">Products</Nav.Link>
      <NavDropdown title="User Options" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Log In</NavDropdown.Item>
        <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">About Us</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    {/* <Nav>
      <Nav.Link href="#deets">About Us</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav> */}
  </Navbar.Collapse>
  </Container>
</Navbar>
           <Link to="/"><Button variant="primary">HomeButton</Button></Link> 
            
        </div>
    )
}

export default Header
