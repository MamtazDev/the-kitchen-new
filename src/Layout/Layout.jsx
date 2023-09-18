import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Nav1 from "../Shared/Navbar/Nav1";

const Layout = () => {
  return (
    <div>
      <Nav1 />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
