import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Pagination from "./Pagination";
import "../styles/pagination.css";

const ItemSection = () => {
  const [data, setData] = useState([]);
  const itemQuantity = 12; // how many items per page for pagination

  // pagination
  const [currentPage, setCurrentPage] = useState(1);

  const lastItemIndex = currentPage * itemQuantity; //last item index of page
  const firstItemIndex = lastItemIndex - itemQuantity; // first item index of page
  const currentPosts = data.slice(firstItemIndex, lastItemIndex); // slice from api array

  //Api fetch call once when page loaded
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
      <ItemList data={currentPosts} />
      <div className="paginationContainer">
        <Pagination
          itemQuantity={itemQuantity}
          setCurrentPage={setCurrentPage}
          allItems={data.length}
        />
      </div>
    </div>
  );
};

export default ItemSection;
