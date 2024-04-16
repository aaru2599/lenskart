import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
const WishlistModal = ({
  wishlistdata,
  handleModal,
  modalOpen,
  handleRemoveFromWish,
  handleClearWishlist,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  console.log("hidden", hidden);
  //  console.log("wishlistprops",wishlist);
  useEffect(() => {
    setIsVisible(modalOpen);
  }, [modalOpen]);
  const modalClassName = isVisible
    ? " flex flex-col  w-[300px]  border-2  rounded "
    : "hidden";
  return (
    <>
      <div className={` ${modalClassName}`}>
        <div className="flex  bg-[#333] justify-between   items-center py-2 border-b text-white  px-4">
          <div></div>
          <div>Wishlist</div>
          <button>
            <RxCross2 onClick={() => handleModal(false)} />
          </button>
        </div>

        {/* =============================bottom======= */}

        {wishlistdata.length > 0 ? (
          <div>
            <div className="max-h-[300px] overflow-auto bg-white">
              {wishlistdata.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="relative border-b px-4 py-2 flex items-center justify-start gap-5 "
                    onMouseEnter={() => setHidden(item.id)}
                    onMouseLeave={() => setHidden(null)}
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
                    {hidden === item.id && (
                      <div className="absolute top-0 right-0 mr-2 mt-2 transition-opacity duration-1000">
                        <button onClick={() => handleRemoveFromWish(item.id)}>
                          <RxCross2 />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center gap-3 ">
            <button
                className=" flex  items-center text-[12px] font-[500] p-1"
                
              >
                <div className="border px-[10px] rounded-md py-[2px] bg-[#329c9247] ">
                  Clear 
                </div>
              </button>
              <button
                className=" flex text-[12px] font-[500] p-1"
                onClick={handleClearWishlist}
              >
                <div className="border px-[10px] rounded-md py-[2px] bg-[#329c9247] ">
                  Clear All
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-[100px] ">
            Please add something on wishlist
          </div>
        )}
      </div>
    </>
  );
};

export default WishlistModal;
