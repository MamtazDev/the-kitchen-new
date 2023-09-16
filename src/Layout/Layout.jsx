import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/Navbar/Navbar";
import About from "../Shared/Navbar/About";

const Layout = () => {
  return (
    <div>
      <NavBar />
      {/* <About/> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
