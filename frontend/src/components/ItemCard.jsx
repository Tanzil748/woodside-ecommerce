import React from "react";
import "../styles/itemCard.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ItemCard = ({ img, name, price, _id }) => {
  const dispatch = useDispatch();
  const clickHandler = ({ img, name, price, _id }) => {
    console.log("clicked");
    dispatch(addToCart({ img, name, price, _id }));
  };
  return (
    <div>
      <div className="card mb-2 h-100">
        <img
          src={img}
          alt={name}
          className="imgContainer card-img-top img-fluid"
        />
        <div className="card-body px-1">
          <h5 className="card-title fw-bold">{`$${price}`}</h5>
          <p className="card-text">{name}</p>
        </div>
        <div className="buttonPosition">
          <div
            className="btn"
            onClick={() => clickHandler({ img, name, price, _id })}
          >
            Add +
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
