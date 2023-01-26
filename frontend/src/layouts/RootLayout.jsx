import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavComponent from "../components/NavComponent";

const RootLayout = () => {
  return (
    <div>
      <NavComponent />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
