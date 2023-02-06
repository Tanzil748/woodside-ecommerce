import React from "react";
import "../styles/singleCartItem.css";
import { addToCart, removeFromCart, decreaseCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const SingleCartItem = ({ _id, img, name, price, cartQuantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="row">
      <div className="cartImageBox col-5">
        <img src={img} alt={name} className="imgContainerSize" />
        {name}
        <button
          onClick={() =>
            dispatch(removeFromCart({ _id, img, name, price, cartQuantity }))
          }
        >
          Remove
        </button>
      </div>
      <div className="cartPriceBox col-3">{`$${price}`}</div>
      <div className="cartQuantityBox col-4">
        <button
          onClick={() =>
            dispatch(decreaseCart({ _id, img, name, price, cartQuantity }))
          }
        >
          -
        </button>
        {cartQuantity}
        <button
          onClick={() =>
            dispatch(addToCart({ _id, img, name, price, cartQuantity }))
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SingleCartItem;
