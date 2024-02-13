import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Hamburger from 'hamburger-react';




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
            <Nav.Link className='d-none d-sm-block ' href="#home">Home</Nav.Link>
            <Nav.Link className='d-none d-sm-block' href="#services">Services</Nav.Link>
            <Nav.Link className='d-none d-sm-block' href="#about">About Us</Nav.Link>
            <Nav.Link className='d-none d-sm-block' href="#contact">Contact</Nav.Link>

            <div className="dropdown d-block d-sm-none " >
            <a className="btn btn-dark dropdown-toggle bg-dark d-flex "  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <Hamburger hideOutline={false} size={20} />
            </a>

            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Home</a></li>
              <li><a className="dropdown-item" href="#">Services</a></li>
              <li><a className="dropdown-item" href="#">About Us</a></li>
            </ul>
          </div>
          </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;