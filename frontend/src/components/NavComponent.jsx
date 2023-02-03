import React from "react";
import "../styles/navComponent.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsCart4 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const NavComponent = () => {
  // store holds all reducers setup in store.js
  const amount = useSelector((store) => store.cart.amount);

  return (
    <Navbar expand="lg" className="navComponent px-2 pt-3">
      <div className="container-xxl px-3">
        <Navbar.Brand className="fw-bolder text-white" href="/">
          <span className="title1">Woodside</span> Bazaar
        </Navbar.Brand>
        <Nav className="me-auto my-2 my-lg-0"></Nav>
        <div className="d-flex gap-2 align-items-center">
          <NavDropdown
            title={<FaUserCircle size={30} color={"#ffef9f"} />}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="/signin">Sign In</NavDropdown.Item>
            <NavDropdown.Item href="/register">Register</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/cart">
            <button type="button" className="cartButton btn position-relative">
              <BsCart4 size={20} color={"#ffef95"} />
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                style={{ backgroundColor: "#ff5d8f" }}
              >
                {amount}
              </span>
            </button>
          </Nav.Link>
        </div>
      </div>
    </Navbar>
  );
};

export default NavComponent;
