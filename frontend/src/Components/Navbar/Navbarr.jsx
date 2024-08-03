import React from "react";
import Logo from "../../Assets/Images/nexus-logo.png";
import { FaCaretDown } from "react-icons/fa";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbarr.css";
import { LiaWhmcs } from "react-icons/lia";

function Navbarr() {
  return (
    <Navbar bg="light" expand="lg" className="navbarr">
      <Container className="navbar-container">
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" className="nav-links">
              <span>WEB HOSTING</span>
              <FaCaretDown className="icon" />
            </Nav.Link>
            <Nav.Link href="#domains">DOMAINS</Nav.Link>
            <Nav.Link href="#developments">DEVELOPMENTS</Nav.Link>
            <Nav.Link href="#solutions">SOLUTIONS</Nav.Link>
            <Nav.Link href="#about-us" className="nav-links">ABOUT US</Nav.Link>
          </Nav>
          <div className="button-wrapper">
            <Nav.Link href="#client-area">
              <button className="btn btn-primary Button">
                <LiaWhmcs className="icon" /> Client Area
              </button>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;

