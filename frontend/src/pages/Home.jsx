import React from "react";
import "../styles/homePage.css";
import Categories from "../components/Categories";
import HomeCarasoul from "../components/HomeCarasoul";
import ItemSection from "../components/ItemSection";

const Home = () => {
  return (
    <div className="layoutFooter">
      <HomeCarasoul />
      <Categories />
      <ItemSection />
    </div>
  );
};

export default Home;
