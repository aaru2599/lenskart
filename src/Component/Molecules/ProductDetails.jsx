import { useLocation, useParams } from "react-router-dom";
import ProductDetailSlider from "./ProductDetailsSlider";

import ProductDetailInfo from "./ProductDetailInfo";
import Header from "./Header";
import { useMemo, useState } from "react";
import ProductDetailsLeft from "./ProductDetailsLeft";
import { EyeglassesData } from "../Data/EyeglassesData";
import TopNavbar from "../Atoms/TopNavbar";
import { Wrapper } from "../../App";

const ProductDetails = () => {
  const { id } = useParams();
  const selectedProduct = useMemo(() => {
    const records = EyeglassesData.find((item) => item.id === +id);
    return records;
  }, [id]);
  return (
   <Wrapper>
     <div className="">
      <TopNavbar/>
      <div className="sticky bg-white top-0  z-20">
        <Header />
      </div>
      <div className="">
        <div className="flex p-4  ">
          <div  className="md:flex-[70%] flex-[100%] gap-2 flex justify-center  ">
            <ProductDetailsLeft selectedProduct={selectedProduct} />
          </div>
          <div className="" style={{ flex: "30%" }}>
            <div className="md:block hidden sticky top-32">
              <ProductDetailInfo data={selectedProduct} />
            </div>
          </div>
        </div>
      </div>
    </div>
   </Wrapper>
  );
};

export default ProductDetails;
