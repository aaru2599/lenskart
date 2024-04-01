import React from "react";
import { RxCross2 } from "react-icons/rx";
const Wishlist = () => {
  const wishlistData = [
    {
      id: 1,
      normal_image:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e15417-w-c1-eyeglasses_csvfile-1701688526805-img_7894.jpg",

      name: "Lenskart Hustlr",
      type: "Ocean Blue",
      size: "Medium",
      price: 1200,
      coupon: "Get For ₹1200. Coupon: SINGLE",
    },
    {
      id: 1,
      normal_image:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e15417-w-c1-eyeglasses_csvfile-1701688526805-img_7894.jpg",

      name: "Lenskart Hustlr",
      type: "Ocean Blue",
      size: "Medium",
      price: 1200,
      coupon: "Get For ₹1200. Coupon: SINGLE",
    }, {
      id: 1,
      normal_image:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e15417-w-c1-eyeglasses_csvfile-1701688526805-img_7894.jpg",

      name: "Lenskart Hustlr",
      type: "Ocean Blue",
      size: "Medium",
      price: 1200,
      coupon: "Get For ₹1200. Coupon: SINGLE",
    }, {
      id: 1,
      normal_image:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e15417-w-c1-eyeglasses_csvfile-1701688526805-img_7894.jpg",

      name: "Lenskart Hustlr",
      type: "Ocean Blue",
      size: "Medium",
      price: 1200,
      coupon: "Get For ₹1200. Coupon: SINGLE",
    },
  ];
  return (
    <div className="flex flex-col border w-[300px] rounded">
      <div className="flex justify-between items-center py-2 border-b  px-4">
        <div></div>
        <div>Wishlist</div>
        <div><RxCross2/></div>
      </div>
        {/* =============================bottom======= */}
      <div>
        {wishlistData.map((item) => {
          return (
            <div key={item.id} className="border-b px-4 py-2 flex items-center justify-between">
              <div>
                <input type="checkbox" />
              </div>
              <div className="flex items-center gap-3">
             
                
                  <img
                    className="w-[50px] h-[40px] rounded object-contain border"
                    src={item.normal_image}
                    alt=""
                  />
                
                <div className="text-[14px]">
                  <div className="font-semibold text-slate-500">{item.name}</div>
                  <div className=" text-slate-400">{item.price}</div>
                </div>
              </div>
              <div><RxCross2/></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
