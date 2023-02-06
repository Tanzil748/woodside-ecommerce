import React from "react";
import SingleCartItem from "../components/SingleCartItem";
import "../styles/cart.css";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const { cartItems, totalPrice } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <div className="container-lg py-2">
      {/* check if empty or not */}
      {cartItems.length === 0 ? (
        <div className="emptyCart pt-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="lead fw-bolder">Cart is Empty</div>
            <p>Please add items to get order details</p>
          </div>
        </div>
      ) : (
        <div className="container-lg py-2 filledCart">
          <h1 className="d-flex justify-content-center display-5">
            Order Review
          </h1>
          <div className="row">
            <h3 className="col-5 fw-normal">Item</h3>
            <h3 className="col-3 fw-normal">Price</h3>
            <h3 className="col-4 fw-normal">Quantity</h3>
          </div>
          <div>
            {cartItems.map((item) => (
              <SingleCartItem key={item._id} {...item} />
            ))}
          </div>
          <hr />
          <div className="d-flex justify-content-between px-1">
            <button onClick={() => dispatch(clearCart({ cartItems }))}>
              Empty Cart
            </button>
            <div className="lead fw-bolder">{`Total: $${totalPrice.toFixed(
              2
            )}`}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
