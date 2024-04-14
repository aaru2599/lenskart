import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
const WishlistModal = ({wishlistdata,handleModal,modalOpen,handleRemoveFromWish }) => {
  const [isVisible, setIsVisible] = useState(false)
//  console.log("wishlistprops",wishlist);
useEffect(()=>{
setIsVisible(modalOpen)
},[modalOpen])
const modalClassName = isVisible
? " flex flex-col border-2 w-[300px] rounded  "
: "hidden";
  return (
  <div className={` ${modalClassName}`}>
      <div className="flex bg-green-300 justify-between items-center py-2 border-b  px-4">
        <div></div>
        <div>Wishlist</div>
        <button>
          <RxCross2 onClick={() => handleModal(false)}/>
        </button>
      </div>
      {/* =============================bottom======= */}
      <div className="max-h-[300px] overflow-auto">
        {wishlistdata.map((item) => {
          return (
            <div
              key={item.id}
              className="border-b px-4 py-2 flex items-center justify-between"
            >
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
                  <div className="font-semibold text-slate-500">
                    {item.name}
                  </div>
                  <div className=" text-slate-400">{item.price}</div>
                </div>
              </div>
              <div onClick={()=>handleRemoveFromWish(item.id)}>
                <RxCross2 />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center  text-[14px] "><span className="border">Clear All</span></div>
    </div>
  );
};

export default WishlistModal;
