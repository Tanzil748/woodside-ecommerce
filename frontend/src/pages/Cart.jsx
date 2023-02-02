import React from "react";
import SingleCartItem from "../components/SingleCartItem";
import "../styles/cart.css";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems, quantity, total } = useSelector((store) => store.cart);

  // cart quantity
  if (quantity < 1) {
    return (
      <div className="emptyCart pt-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="lead fw-bolder">Cart is Empty</div>
          <p>Please add items to get order details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-lg py-2">
      <div>
        {cartItems.map((item) => (
          <div key={item.name}>
            <SingleCartItem {...item} />
          </div>
        ))}
      </div>
      <hr />
      <div className="d-flex justify-content-between px-1">
        <div className="lead fw-bolder">Total</div>
        <div className="lead fw-bolder">{`$${total}`}</div>
      </div>
    </div>
  );
};

export default Cart;
