import React from "react";
import Categories from "../components/Categories";
import HomeCarasoul from "../components/HomeCarasoul";
import NavComponent from "../components/NavComponent";

const Home = () => {
  return (
    <div>
      <NavComponent />
      <HomeCarasoul />
      <Categories />
    </div>
  );
};

export default Home;
