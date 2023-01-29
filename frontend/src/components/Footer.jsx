import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footerComponent">
      <div className="container-xxl d-flex justify-content-between px-2 pt-1 text-white">
        <div>
          <h4>Address</h4>
          <p>1234 Fruit Ave, NY, USA</p>
        </div>
        <div className="text-end">
          <h4>Contact Us</h4>
          <p>Woodside Bazaar | fakeemail@email.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
