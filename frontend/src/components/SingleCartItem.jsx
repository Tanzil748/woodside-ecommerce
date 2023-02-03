import React from "react";
import "../styles/singleCartItem.css";
import { add, subtract, removeItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const SingleCartItem = ({ id, img, name, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="card mb-2">
      <div className="d-flex">
        <img src={img} alt={name} className="imgContainerSize" />
        <div className="card-body position-relative">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{`$${price}`}</p>
          <div className="quantityAdjustment position-absolute gap-3">
            <button
              className="btn btn-sm"
              style={{ height: "30px" }}
              onClick={() => {
                if (amount === 1) {
                  dispatch(removeItem(id));
                  return;
                }
                dispatch(subtract({ id }));
              }}
            >
              -
            </button>
            <p className="fw-bold">{amount}</p>
            <button
              className="btn btn-sm"
              style={{ height: "30px" }}
              onClick={() => {
                dispatch(add({ id }));
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCartItem;
