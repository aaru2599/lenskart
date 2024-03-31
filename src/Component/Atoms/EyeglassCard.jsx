import { EyeglassesData } from "../Data/EyeglassesData";

const EyeglassCard = ({data}) => {
  
  return (
    <>
        {data.map((item, index) => {
          return (
            <div key={index} className=" border rounded ">
              <div className="relative">
                <div className=" border-b  relative flex gap-1 items-start p-2 ">
                  <div className="flex flex-col bg-gray-200 h-[100%] p-[2px] py-[4px] rounded-full  gap-1">
                    {item.color_image.map((colorItem, colorIndex) => {
                      return (
                        <div
                          key={colorIndex}
                          className="border-2 border-gray-400 rounded-full"
                        >
                          <img width={12} height={12} src={colorItem.logo} alt="" />
                        </div>
                      );
                    })}
                    <div className="text-[10px] font-bold">+2</div>
                  </div>
                  <div className=" w-[100%] ">
                    <img
                      src={item.normal_image}
                      className="h-[150px] object-contain"
                      alt={item.name}
                    />
                    {item.rating.map((ratingItem, ratingIndex) => {
                      return (
                        <div
                          key={ratingIndex}
                          className="px-1 absolute bottom-2  left-2 flex gap-1 items-center border text-[10px] rounded-full"
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
                    <div className="absolute right-2 bottom-2 text-[10px] bg-green-200 font-semibold rounded-full px-2 text-green-800">
                      {item.coupon}
                    </div>
                    <div className="absolute top-2 right-2 ">
                      
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.8em"
                        height="1.8em"
                        fillRule="evenodd"
                        className="wishlist-icon "
                        clipRule="evenodd"
                      >
                        <path d="M12 21.593C6.37 16.054 1 11.296 1 7.191 1 3.4 4.068 2 6.281 2c1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447C20.266 2.01 23 3.631 23 7.191c0 4.069-5.136 8.625-11 14.402M17.726 1.01c-2.203 0-4.446 1.042-5.726 3.238C10.715 2.042 8.478 1 6.281 1 3.098 1 0 3.187 0 7.191 0 11.852 5.571 16.62 12 23c6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* =========================bottom section====================== */}
              <div className="p-2">
                <div className="flex justify-between">
                  <div className="font-semibold text-[14px] ">{item.name}</div>
                  <div className="text-[13px] font-semibold text-gray-600">
                    {item.type}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-[14px] font-semibold">
                    <span className="text-gray-600">Size:</span> <span>{item.size}</span>
                  </div>
                  <div className="text-[13px] font-semibold text-gray-600">
                    &#8377;{item.price}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default EyeglassCard;
