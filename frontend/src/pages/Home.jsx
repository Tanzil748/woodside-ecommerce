import React from "react";
import "../styles/homePage.css";
import Categories from "../components/Categories";
import HomeCarasoul from "../components/HomeCarasoul";
import ProductSection from "../components/ProductSection";

const Home = () => {
  return (
    <div className="layoutFooter">
      <HomeCarasoul />
      <Categories />
      <ProductSection />
    </div>
  );
};

export default Home;
