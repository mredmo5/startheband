import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';


const navigationItems = () => (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Star the Band</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link active href="/">Home</Nav.Link>
      <Nav.Link href="#pricing">Book the Band</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Requests</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        TIPS
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default navigationItems;
