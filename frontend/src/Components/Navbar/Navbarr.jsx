import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/nexus-logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbarr.css";
import { LiaWhmcs } from "react-icons/lia";

function Navbarr() {
  return (
    <Navbar bg="light" expand="lg" className="navbarr">
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="https://nexus.pk/shared-hosting/host-zero/" className="nav-links">
              <span>WEB HOSTING</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/domain">DOMAINS</Nav.Link>
            <Nav.Link as={Link} to="https://nexus.pk/web-solution/">DEVELOPMENTS</Nav.Link>
            <Nav.Link as={Link} to="https://nexus.pk/ssl/">SOLUTIONS</Nav.Link>
            <Nav.Link as={Link} to="https://nexus.pk/about-us/" className="nav-links">ABOUT US</Nav.Link>
          </Nav>
          <div className="button-wrapper">
            <Nav.Link as={Link} to="/client-area">
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
