import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductDetails from "./Component/Molecules/ProductDetails.jsx";
import HomeSlider from "./Component/Molecules/HomeSlider.jsx";
import EyeGlasses from "./Component/Organisms/EyeGlasses.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/slider",
    element: <HomeSlider />,
  },
  {
    path: "/Eyeware",
    element: <div><EyeGlasses /></div>,
  },
  
  
  {
    path: "/product-details/:id",
    element: <ProductDetails />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  
    <RouterProvider router={router} />
  </>
);
