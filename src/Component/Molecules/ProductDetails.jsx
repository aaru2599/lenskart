import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductDetailSlider from "./ProductDetailsSlider";
import MultipleItems from "./ProductDetailsSlider";
import Responsive from "./ProductDetailsSlider";
import ProductDetailInfo from "./ProductDetailInfo";
import Header from "./Header";

const ProductDetails = () => {
  // const { id } = useParams();
  const location = useLocation();
  const { state } = location;
  const selectedProduct = state.item;

  console.log("selectedProduct", selectedProduct);

  return (
    <>
      <Header/>
    <div className="flex ">
      <div style={{ flex: "70%" }} className="flex  flex-col items-center">
        <div className="flex flex-col justify-between items-center">
          <img
            src={selectedProduct.normal_image}
            className="w-[500px]"
            alt=""
          />
          <ProductDetailSlider imgLink={selectedProduct.details_image} />
        </div>
        <div className="flex ">
          <img src={selectedProduct.diff_col} alt="" className="w-[200px]" />
          <img src={selectedProduct.lens_promise} alt="" className="w-[200px]" />
        </div>
      </div>
      <div className="" style={{ flex: "30%" }}>
    <ProductDetailInfo data={selectedProduct}/>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
