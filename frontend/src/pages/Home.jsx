import React from "react";
import Categories from "../components/Categories";
import HomeCarasoul from "../components/HomeCarasoul";
import ItemSection from "../components/ItemSection";

const Home = () => {
  return (
    <div>
      <HomeCarasoul />
      <Categories />
      <ItemSection />
    </div>
  );
};

export default Home;
