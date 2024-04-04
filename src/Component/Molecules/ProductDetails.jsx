import React from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetails = () => {
  const {id}=useParams()
  // const location = useLocation();
  // const { state } = location;
  // const selectedProduct = state?.item;
  
  console.log("selectedProduct",id);
  return <div>product id:{id}</div>;
};

export default ProductDetails;
