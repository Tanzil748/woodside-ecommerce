import React, { useEffect } from "react";
import { useState } from "react";
import ItemCard from "./ItemCard";

const ItemSection = () => {
  const [data, setData] = useState([]);

  const apiCall = async () => {
    await fetch("http://localhost:5500/api/v1/items")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="container-xxl py-2">
      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          {data.map(({ img, name, price, _id }) => (
            <div key={_id} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <ItemCard img={img} price={price} name={name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemSection;
