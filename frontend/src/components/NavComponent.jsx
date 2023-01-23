import React from "react";
import "../styles/navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCart4 } from "react-icons/bs";

const NavComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container-fluid">
        <div>
          <Navbar.Brand href="#">Woodside Bazaar</Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex align-items-center"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/signin">Sign In</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/cart">
                <button
                  type="button"
                  class="btn btn-secondary position-relative"
                >
                  <BsCart4 size={20} />
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    10
                  </span>
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
};

export default NavComponent;
