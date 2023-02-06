import React from "react";
import SingleCartItem from "../components/SingleCartItem";
import "../styles/cart.css";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { BsTrash } from "react-icons/bs";

const Cart = () => {
  const { cartItems, totalPrice } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <div className="container-xxl py-2 px-0">
      {/* check if empty or not */}
      {cartItems.length === 0 ? (
        <div className="emptyCart pt-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="lead fw-bolder">Cart is Empty</div>
            <p>Please add items to get order details</p>
          </div>
        </div>
      ) : (
        <div className="container-xxl py-2 filledCart">
          <h1 className="d-flex justify-content-center display-5">
            Order Review
          </h1>
          <div className="row mb-2" style={{ backgroundColor: "#aad576" }}>
            <h3 className="col-8 ps-3">Item</h3>
            <h3 className="col-4 d-flex justify-content-center">Quantity</h3>
          </div>
          <div>
            {cartItems.map((item) => (
              <SingleCartItem key={item._id} {...item} />
            ))}
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="btn bg-danger fw-bolder"
              onClick={() => dispatch(clearCart({ cartItems }))}
            >
              Empty Cart <BsTrash />
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
