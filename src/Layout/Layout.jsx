import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/Navbar/Navbar";
import About from "../Shared/Navbar/About";
import Nav1 from "../Shared/Navbar/Nav1";

const Layout = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Nav1 />
      {/* <About/> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
