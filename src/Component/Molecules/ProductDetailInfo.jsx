import React from "react";
import { CiHeart } from "react-icons/ci";
import Header from "./Header";

const ProductDetailInfo = ({ data }) => {
  console.log("data", data);
  return (
    <>
      <div className="p-4 flex flex-col gap-2 border ">
        <div>
          <div className="flex justify-between items-center">
            <div>{data.name}</div>
            <div>
              <CiHeart />
            </div>
          </div>
          <div>{data.full_type}</div>
          <div>Size:{data.size}</div>
          <div>
            <div className="flex">
              <div> &#8377; {data.price}</div>{" "}
              <div>(&#8377;{data.price} with GST)</div>
            </div>
            <div>Frame + Lens</div>
          </div>
          <div className="flex flex-wrap gap-2 w-[200px]">
            {data.color_image.map((item) => {
              return (
                <>
                  <img src={item.logo} width={15} alt="" />
                  <img src={item.logo} width={15} alt="" />
                  <img src={item.logo} width={15} alt="" />
                </>
              );
            })}
          </div>
        </div>
        <div className="border rounded p-2">
          <div>With Anti-Glare Lenses</div>
          <div>{data.coupon}</div>
        </div>
        <div className="border rounded p-2">
          <div>SELECT LENSES</div>
          <div>( with 1 Year Warranty & 14 Day Return )</div>
        </div>
        <div className="border h-[60px] relative rounded p-2 flex justify-center items-center">
          <div className="">Try On</div>
          <img
            src="https://static.lenskart.com/media/desktop/img/pdp/try_on_model.png"
            className="absolute bottom-0 right-6"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetailInfo;
