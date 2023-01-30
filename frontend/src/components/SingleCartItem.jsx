import React from "react";
import "../styles/singleCartItem.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleCartItem = () => {
  return (
    <div className="card mb-2">
      <div className="d-flex">
        <img
          src="https://images.unsplash.com/photo-1591735179859-a049994205de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          alt="title"
          className="imgContainer"
        />
        <div className="card-body">
          <h3 className="card-title">Title</h3>
          <p className="card-text">Price</p>
          <div className="quantity">
            <AiOutlineMinus size={20} />
            <p>1</p>
            <AiOutlinePlus size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCartItem;
