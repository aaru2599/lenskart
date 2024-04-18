import ProductDetailSlider from "./ProductDetailsSlider";
import ProductDetailInfo from "./ProductDetailInfo";
import { useState } from "react";

const ProductDetailsLeft = ({ selectedProduct }) => {
  const [clickImage, setClickImage] = useState(null);
  console.log("selectedProduct.featured_img", selectedProduct);
  const imageWidth=100;
  const imageHeight=100
  return (
    <div className="flex flex-col gap-3">
      <div className="md:block hidden text-[14px]">
        {selectedProduct.name} {selectedProduct.full_name}
      </div>
      <div className="md:hidden  block">
            <span className="font-bold text-[16px] text-slate-600">
              {selectedProduct.full_type}
            </span>
            <span className="text-[14px] font-[500] text-sky-800">
              {" "}
              {selectedProduct.lens_type}
            </span>
          </div>

      <div className=" flex gap-4 flex-col justify-between items-center border-b pb-4">
        <div className="rounded border relative">
          <img
            src={clickImage || selectedProduct.normal_image}
            className="md:w-[500px] w-[300px] md:h-[350px] h-[350px] object-contain"
            alt=""
          />
          <div className="md:block hidden absolute right-2 bottom-2 rounded bg-green-200 text-green-800 font-[600] text-[12px] px-2">
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
<div className="md:hidden block">
<ProductDetailInfo data={selectedProduct} />
</div>
      <div className="flex justify-between gap-4 border-b py-4">
        <img
          src={selectedProduct.diff_col}
          loading="lazy"
          alt=""
          className={`border rounded md:w-[265px] w-[${imageWidth}px] md:h-[100%] h-[${imageHeight}px]`}
        />
        <iframe
          src={selectedProduct.iframe_link}
          //   frameBorder="4"
            
          className={` md:w-[265px] md:h-[100%] w-[100px] h-[${imageHeight}px] object-contain rounded`}
          
          allowfullscreen=""
        ></iframe>

        <img
          src={selectedProduct.lens_promise}
          alt=""
          className={`border rounded md:w-[265px] w-[${imageWidth}px] md:h-[100%] h-[${imageHeight}px]`}

        />
      </div>
      {selectedProduct.featured_img && (
        <div className="grid grid-cols-3 md:gap-3 gap-5 justify-between">
          {selectedProduct.featured_img.map((imgUrl, index) => {
            return (
              <div key={index} className="border p-2 rounded flex md:w-[250px] w-[100px] h-[100px]  md:h-[250px] ">
                <img
                  src={imgUrl}
                  alt=""
                  className=" rounded   object-contain"
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
