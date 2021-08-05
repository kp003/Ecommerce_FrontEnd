import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { isauthenticated } from './backend/Auth';
function Header() {

  const isLoggedIn = isauthenticated();
  //console.log(isLoggedIn)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  
  <Navbar.Brand href="/" >TechNova</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link href="/aboutus">About Us</Nav.Link>
      <Nav.Link href="/product">Products</Nav.Link>
      <Nav.Link href="/category">Category</Nav.Link>
      <Nav.Link href="/admin/dashboard">Admin</Nav.Link>

      <NavDropdown title="User Options" id="collasible-nav-dropdown" >
        {!isLoggedIn &&(<>
          <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
        <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
        
        </>)}
        {isLoggedIn &&(<NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>)}
        {/* //<NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item> */}
        {/* <NavDropdown.Divider /> */}
      </NavDropdown>
    </Nav>
    {/* <Nav>
      <Nav.Link href="#deets">About Us</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav> */}
  </Navbar.Collapse>
 
</Navbar>
           <Link to="/"></Link> 
            
        </div>
    )
}

export default Header
