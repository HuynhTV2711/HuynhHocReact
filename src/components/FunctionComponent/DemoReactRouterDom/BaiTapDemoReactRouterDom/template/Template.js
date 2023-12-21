import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Template = () => {
  // setup một template dành cho tất cả các trang
  // Trên dưới là header, footer, giữa là các component
  return (
    <div className="container mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Template;
