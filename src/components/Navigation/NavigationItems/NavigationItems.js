import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import logo from '../../../assets/images/Logo.png';
import styles from './NavigationItems.module.css';



const navigationItems = () => (
<Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/"><img className={styles.Logo} src={logo}/> Star the Band</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Booking">Book the Band</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/Tour">Tour</Nav.Link>
      <Nav.Link  href="/Upload">Upload Content </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default navigationItems;
