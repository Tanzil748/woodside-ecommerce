import React from "react";
import Categories from "../components/Categories";
import HomeCarasoul from "../components/HomeCarasoul";
import ProductSection from "../components/ProductSection";

const Home = () => {
  return (
    <div>
      <HomeCarasoul />
      <Categories />
      <ProductSection />
    </div>
  );
};

export default Home;
