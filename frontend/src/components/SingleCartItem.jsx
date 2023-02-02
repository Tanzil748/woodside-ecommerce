import React from "react";
import "../styles/singleCartItem.css";

const SingleCartItem = ({ ...item }) => {
  return (
    <div className="card mb-2">
      <div className="d-flex">
        <img src={item.img} alt={item.name} className="imgContainerSize" />
        <div className="card-body position-relative">
          <h3 className="card-title">{item.name}</h3>
          <p className="card-text">{`$${item.price}`}</p>
          <div className="quantityAdjustment position-absolute gap-3">
            <button className="btn btn-sm" style={{ height: "30px" }}>
              -
            </button>
            <p className="fw-bold">1</p>
            <button className="btn btn-sm" style={{ height: "30px" }}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCartItem;
