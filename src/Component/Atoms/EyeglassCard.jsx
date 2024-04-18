// import { FaRegHeart } from "react-icons/fa";

import { CiHeart } from "react-icons/ci";
import { Link, json } from "react-router-dom";
import Chip from "./Chip";
import { useEffect, useState } from "react";
import WishlistModal from "./Modal/WishlistModal";

const EyeglassCard = ({ data }) => {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const handleModal = (data) => {
    setModalOpen(data);
  };
  const handleRemoveFromWish = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id)
    );
  };
  const handleClearWishlist = () => {
    setWishlist([]);
  };
  const heartClick = (item) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.find((wish) => wish.id === item.id)) {
        return [...prevWishlist, item];
      } else {
        return prevWishlist.filter((wish) => wish.id !== item.id);
      }
    });
  };
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (storedWishlist) {
      setWishlist(storedWishlist);
    }
  }, []);
  console.log("wishlist", wishlist);
  return (
    <div>
      <div className=" fixed bottom-0 rounded md:left-[45%] z-50  bg-slate-100">
        <WishlistModal
          wishlistdata={wishlist}
          modalOpen={modalOpen}
          handleModal={handleModal}
          handleRemoveFromWish={handleRemoveFromWish}
          handleClearWishlist={handleClearWishlist}
        />
      </div>
      <div className="grid md:gap-3 md:grid-cols-4  grid-cols-2 gap-[15px]">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="border rounded p-2 hover:shadow-md   hover:scale-[1.01] transition-transform transform-gpu "
            >
              <Link
                className="   no-underline text-black relative"
                to={`/product-details/${item.id}`}
              >
                <div className="absolute md:bottom-2 bottom-1  w-[100%]    ">
                  {item.coupon && <Chip data={item.coupon} />}
                </div>

                  <div className="absolute left-0 top-0">
                    {item.rating.map((ratingItem, ratingIndex) => {
                      return (
                        <div
                          key={ratingIndex}
                          className="px-1  flex gap-1 items-center border text-[10px] rounded-full"
                        >
                          <div>{ratingItem.rate}</div>

                          <img
                            src={ratingItem.star}
                            height={12}
                            loading="lazy"
                            width={12}
                            alt=""
                          />

                          <div>{ratingItem.number}</div>
                        </div>
                      );
                    })}
                  </div>

                  <Link 
                    onClick={() => heartClick(item)}
                    className=" text-[20px] no-underline text-black absolute right-0 top-0 "
                    // Change color based on whether item is in wishlist
                  >
                    <button onClick={openModal}>
                      <CiHeart
                        style={{
                          fill: wishlist.find((wish) => wish.id === item.id)
                            ? "red"
                            : "",
                        }}
                      />
                    </button>
                  </Link>
                <div className=" border-b  relative flex gap-2 items-center  ">
                  <div className="md:flex hidden flex-col bg-[#e9e9e9] h-[100%] p-[2px] py-[4px] rounded-full  gap-2">
                    {item.color_image.map((colorItem, colorIndex) => {
                      return (
                        <div
                          key={colorIndex}
                          className="border-2  border-white rounded-full"
                        >
                          <img
                            className="w-[15px] h-[12px] rounded-full "
                            src={colorItem.logo}
                            loading="lazy"
                            alt=""
                          />
                        </div>
                      );
                    })}
                    {item.color_image.length > 3 && (
                      <div className="text-[10px] font-bold">+2</div>
                    )}
                  </div>
                  <div className=" w-[100%] ">
                    <img
                      src={item.normal_image}
                      loading="lazy"
                      className="md:h-[200px] h-[120px] md:w-[300px] w-[240px] object-contain"
                      alt={item.name}
                    />
                  </div>
                </div>
              </Link>

              {/* =========================bottom section====================== */}
              <div className="pt-2 flex flex-col gap-2">
                <div className="flex justify-between text-slate-500">
                  <div className="font-[500] text-[10px]  md:text-[13px] md:w-[50%]">
                    {item.name}
                  </div>
                  <div className="md:text-[12px] text-[8px] text-end w-[50%] truncate  text-gray-600 ">
                    {item.type}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-[13px] font-[500] text-slate-500">
                    &#8377;{item.price}
                  </div>
                  <div className="text-[12px] bg-slate-200 rounded px-2 text-slate-600">
                    {item.size}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EyeglassCard;
