import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout/Layout.jsx";
import Work from "./components/Work/Work.jsx";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import Playlist from "./components/Playlist/Playlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
     
      {
        path: "/work",
        element: <Work />,
       
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/playlist",
        element: <Playlist />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
