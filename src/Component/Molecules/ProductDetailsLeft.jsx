import React, { useState } from "react";
import ProductDetailSlider from "./ProductDetailsSlider";
import Example from "../Atoms/Accordian";
import Accordian from "../Atoms/Accordian";

const ProductDetailsLeft = ({ selectedProduct }) => {
  const [clickImage, setClickImage] = useState(null);
  console.log("selectedProduct.featured_img", selectedProduct);
  return (
    <div className="flex flex-col gap-3">
      <div className=" text-[14px]">
        {selectedProduct.name} {selectedProduct.full_name}
      </div>

      <div className=" flex gap-4 flex-col justify-between items-center border-b pb-4">
        <div className="rounded border relative">
          <img
            src={clickImage || selectedProduct.normal_image}
            className="w-[500px] h-[350px]  object-contain"
            alt=""
          />
          <div className="absolute right-2 bottom-2 rounded bg-green-200 text-green-800 font-[600] text-[12px] px-2">
            {selectedProduct.coupon}
          </div>
        </div>
        <div className="">
          {selectedProduct.details_image && (
            <ProductDetailSlider
              imgLink={selectedProduct.details_image}
              setClickImage={setClickImage}
            />
          )}
        </div>
      </div>

      <div className="flex justify-between border-b py-4">
        <img
          src={selectedProduct.diff_col}
          alt=""
          className="border rounded w-[265px]"
        />
        <iframe
          src={selectedProduct.iframe_link}
          //   frameBorder="4"
          //   width="100%"
          className=" w-[265px]  object-contain rounded"
          //   height="370px"
          allowfullscreen=""
        ></iframe>

        <img
          src={selectedProduct.lens_promise}
          alt=""
          className=" border  w-[265px] rounded"
        />
      </div>
      {selectedProduct.featured_img && (
        <div className="grid grid-cols-3  justify-between">
          {selectedProduct.featured_img.map((imgUrl, index) => {
            return (
              <div key={index} className=" p-4 flex ">
                <img
                  src={imgUrl}
                  alt=""
                  className="w-[250px] rounded h-[250px] border-b  border  object-contain"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductDetailsLeft;
