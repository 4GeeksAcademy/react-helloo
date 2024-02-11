import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Navbar.Brand href="#home" >Landing Page!</Navbar.Brand>
          </div>

          <div className="">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;