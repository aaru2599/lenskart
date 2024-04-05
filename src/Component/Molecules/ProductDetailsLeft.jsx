import React, { useState } from "react";
import ProductDetailSlider from "./ProductDetailsSlider";
import Example from "../Atoms/Accordian";
import Accordian from "../Atoms/Accordian";

const ProductDetailsLeft = ({ selectedProduct }) => {
  const [clickImage, setClickImage] = useState(null);
  console.log("selectedProduct.featured_img", selectedProduct);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-4 flex-col justify-between items-center border-b pb-4">
        <img
          src={clickImage || selectedProduct.normal_image}
          className="w-[500px] h-[400px] rounded border object-contain"
          alt=""
        />
       <div className="">
       {selectedProduct.details_image && (
          <ProductDetailSlider
            imgLink={selectedProduct.details_image}
            setClickImage={setClickImage}
          />
        )}
       </div>
      </div>
      <div>
        <Accordian accordianData={selectedProduct.technical_info}/>
      </div>
      <div className="flex justify-between border-b py-4">
        <img src={selectedProduct.diff_col} alt="" className=" w-[200px]" />
        <iframe
          src="https://www.youtube.com/embed/dRxJ8okzHtQ?autoplay=1&amp;mute=1&amp;loop=1&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;playlist=dRxJ8okzHtQ"
          //   frameBorder="4"
          //   width="100%"
          className="border w-[200px]  object-contain "
          //   height="370px"
          allowfullscreen=""
        ></iframe>

        <img
          src={selectedProduct.lens_promise}
          alt=""
          className=" border  w-[200px]"
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {selectedProduct.featured_img.map((imgUrl, index) => {
          return (
            <div key={index} className="">
              <img
                src={imgUrl}
                alt=""
                className="w-[250px] h-[250px]  object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetailsLeft;
