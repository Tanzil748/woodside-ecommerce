import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="logo">Woodside Ecommerce</div>
        <div className="navLinks">
          <button>Register</button>
          <button>Sign Up</button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
