import React from "react";
import ItemCard from "./ItemCard";
import { useGetAllItemsQuery } from "../redux/productsApi";

const ItemSection = () => {
  const { data, error, isLoading } = useGetAllItemsQuery();

  return (
    <div className="container-xxl py-2">
      {isLoading ? (
        <p>Data loading...</p>
      ) : error ? (
        <p>Error occured</p>
      ) : (
        <div>
          <div className="row">
            {data.map(({ img, name, price, _id }) => (
              <div key={_id} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <ItemCard img={img} price={price} name={name} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemSection;
