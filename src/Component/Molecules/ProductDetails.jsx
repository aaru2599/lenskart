import { useLocation, useParams } from "react-router-dom";
import ProductDetailSlider from "./ProductDetailsSlider";

import ProductDetailInfo from "./ProductDetailInfo";
import Header from "./Header";
import { useState } from "react";
import ProductDetailsLeft from "./ProductDetailsLeft";

const ProductDetails = () => {
  // console.log("clickImage",clickImage);
  // const { id } = useParams();
  const location = useLocation();
  const { state } = location;
  // const selectedProduct = state.item;
  const selectedProduct = state ? state.item : null;
  // console.log("selectedProduct", selectedProduct);

  return (
    <div className="">
      <div className="sticky bg-white top-0  z-20">
        <Header />
      </div>
      <div className="">
        {selectedProduct ? (
          <div className="flex p-4  ">
            
            <div style={{ flex: "70%" }} className="flex justify-center  ">
              <ProductDetailsLeft selectedProduct={selectedProduct} />
            </div>
            <div className="" style={{ flex: "30%" }}>
              <div className="sticky top-32"><ProductDetailInfo data={selectedProduct} /></div>

            </div>
          </div>
        ) : (
          "Loading"
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
