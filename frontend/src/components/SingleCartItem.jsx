import React from "react";
import "../styles/singleCartItem.css";
import { addToCart, removeFromCart, decreaseCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const SingleCartItem = ({ _id, img, name, price, cartQuantity }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="row px-3">
        <div className="cartImageBox col-8">
          <img src={img} alt={name} className="imgContainerSize" />
          <div>
            <div className="fw-normal">{name}</div>
            <div className="fs-5">{`$${price}`}</div>
            <button
              className="removeBtn"
              onClick={() =>
                dispatch(
                  removeFromCart({ _id, img, name, price, cartQuantity })
                )
              }
            >
              Remove
            </button>
          </div>
        </div>
        <div className="cartQuantityBox col-4">
          <button
            className="btn"
            onClick={() =>
              dispatch(decreaseCart({ _id, img, name, price, cartQuantity }))
            }
          >
            -
          </button>
          <div className="fw-bolder lead">{cartQuantity}</div>
          <button
            className="btn"
            onClick={() =>
              dispatch(addToCart({ _id, img, name, price, cartQuantity }))
            }
          >
            +
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default SingleCartItem;
