import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../header/styles.css';

import { Navbar, Nav, Image } from 'react-bootstrap';

const Header = () => (
  <Navbar expand="lg">
    <Image src="logo192.png" className="img_logo_nav"></Image>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Quem Somos</Nav.Link>
        <Nav.Link href="#link">O que fazemos</Nav.Link>
        <Nav.Link href="#link">Contatos</Nav.Link>
      </Nav>

    </Navbar.Collapse>
  </Navbar>
);

export default Header;