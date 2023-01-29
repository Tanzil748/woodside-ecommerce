import React from "react";
import ItemCard from "./ItemCard";

const ItemList = ({ data }) => {
  return (
    <div>
      <div className="row">
        {data.map(({ img, name, price, _id }) => (
          <div key={_id} className="col-6 col-sm-4 col-md-3 col-lg-2">
            <ItemCard img={img} price={price} name={name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
