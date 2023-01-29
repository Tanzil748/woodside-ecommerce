import Button from "react-bootstrap/Button";
import React from "react";
import "../styles/itemCard.css";

const ItemCard = ({ img, name, price }) => {
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
          <Button className="btnDesign">Add +</Button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
