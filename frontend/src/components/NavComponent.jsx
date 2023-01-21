import React from "react";
import "../styles/navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div>
          <Navbar.Brand href="#">Woodside Bazaar</Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/signin">Sign In</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
