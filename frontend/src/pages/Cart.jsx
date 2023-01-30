import React from "react";
import SingleCartItem from "../components/SingleCartItem";
import TotalItemDetail from "../components/TotalItemDetail";

const Cart = () => {
  return (
    <div className="container-xxl py-2">
      <div className="row d-flex flex-wrap-reverse">
        <div className="col-6 col-md-8">
          {/* single item cart */}
          <SingleCartItem />
          <SingleCartItem />
        </div>
        <div className="col-6 col-md-4">
          {/* checkout detail */}
          <TotalItemDetail />
        </div>
      </div>
    </div>
  );
};

export default Cart;
