// import { FaRegHeart } from "react-icons/fa";

import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

const EyeglassCard = ({ data }) => {
  const navigate = useNavigate();
  const onCardClick = (product) => {
    navigate(`/product-details/${product.id}`);
    // navigate(`/product-details/${product.id}`);
  };
  return (
    <div className="grid gap-3 grid-cols-4 ">
      {data.map((item, index) => {
        return (
          <div key={index} className="border rounded p-2">
            <Link
              className="relative"
              onClick={() => onCardClick(item)}
              to={`/product-details/${item.id}`}
              state={{item}}
              // to={`product-details/${item.id}`}
            >
              <div className=" absolute bottom-2 right-2    ">
                <div>
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
                          width={12}
                          alt=""
                        />

                        <div>{ratingItem.number}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className=" border-b  relative flex gap-2 items-center  ">
                <div className="flex flex-col bg-[#e9e9e9] h-[100%] p-[2px] py-[4px] rounded-full  gap-2">
                  {item.color_image.map((colorItem, colorIndex) => {
                    return (
                      <div
                        key={colorIndex}
                        className="border-2  border-white rounded-full"
                      >
                        <img
                          className="w-[15px] h-[12px] rounded-full "
                          src={colorItem.logo}
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
                    className="h-[200px] object-contain"
                    alt={item.name}
                  />

                  <div className="items-center absolute top-0 right-0 flex justify-between w-[100%]">
                    <div className="  text-[10px] bg-green-200 font-semibold rounded px-2 text-green-800">
                      {item.coupon}
                    </div>
                    <div className=" text-[20px] ">
                      <CiHeart />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* =========================bottom section====================== */}
            <div className="pt-2 flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="font-semibold text-[13px] w-[50%]">
                  {item.name}
                </div>
                <div className="text-[12px] text-end w-[50%] truncate font-[600] text-gray-600 ">
                  {item.type}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-[13px] font-semibold text-gray-600">
                  &#8377;{item.price}
                </div>
                <div className="text-[12px] bg-slate-200 rounded px-2 text-slate-600 font-semibold">
                  {item.size}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EyeglassCard;
