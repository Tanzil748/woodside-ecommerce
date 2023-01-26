import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footerComponent ">
      <div className="container-xxl d-flex justify-content-between px-4 pt-2 text-white">
        <div className="lh-1">
          <h4>Address</h4>
          <p>1234 Fruit Ave, NY</p>
          <p>United States</p>
        </div>
        <div className="lh-1 text-end">
          <h4>Contact Us</h4>
          <p>Woodside Bazaar</p>
          <p>fakeemail@email.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
