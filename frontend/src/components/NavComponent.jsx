import React from "react";
import "../styles/navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsCart4 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const NavComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container-fluid px-3">
        <Navbar.Brand className="fw-bolder" href="/home">
          Woodside Bazaar
        </Navbar.Brand>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        ></Nav>
        <div className="d-flex gap-2 align-items-center">
          <NavDropdown
            title={<FaUserCircle size={30} color="gray" />}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="/signin">Sign In</NavDropdown.Item>
            <NavDropdown.Item href="/register">Register</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/cart">
            <button type="button" class="btn btn-secondary position-relative">
              <BsCart4 size={20} />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                10
              </span>
            </button>
          </Nav.Link>
        </div>
      </div>
    </Navbar>
  );
};

export default NavComponent;
