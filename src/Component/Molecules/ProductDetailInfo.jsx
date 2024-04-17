import { CiHeart } from "react-icons/ci";
import Accordian from "../Atoms/Accordian";

const ProductDetailInfo = ({ data }) => {
  console.log("data", data);
  return (
    <>
      <div className="p-4 flex flex-col gap-2 border rounded  text-slate-800">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="text-[13px]">{data.name}</div>
            <div>
              <CiHeart />
            </div>
          </div>
          <div className=" ">
            <span className="font-bold text-[16px] text-slate-600">
              {data.full_type}
            </span>
            <span className="text-[14px] font-[500] text-sky-800">
              {" "}
              {data.lens_type}
            </span>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="">
                <span className="text-[20px] font-[500] text-[#00bac6]">
                  &#8377;{data.price}
                </span>
                <span className="text-[14px]"> With GST</span>
              </div>{" "}
              <div className="text-[14px] text-[#999999]">{data.size}</div>
            </div>
          </div>
          <div className=" flex items-baseline gap-2">
            <div>Color:</div>
            <div className="flex flex-wrap gap-2">
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
        </div>
        <div className=" flex  gap-3 ">
          <div className="border border-[#00bac6] bg-[#00bac6]  rounded w-[70%]  flex flex-col justify-center items-center">
            <div className="text-center text-[12px] font-semibold">SELECT LENSES</div>
            <div className="text-[11px] font-[500] text-center ">
              1 Year Warrenty & 15 Days Return
            </div>
          </div>
          <div className="relative border h-[40px] border-[#b7a058] bg-[#f7f1de]    rounded w-[50%] flex justify-start items-center ">
            <div className="text-[12px] font-semibold p-2">Try On</div>
            <img
              src="https://static.lenskart.com/media/desktop/img/pdp/try_on_model.png"
              className="absolute bottom-0 right-6 h-[45px]"
              alt=""
            />
          </div>
        </div>
        {data.accordian_data && (
        <div>
          <Accordian accordianData={data.accordian_data} />
          {/* <Accordian accordianData={selectedProduct.} /> */}
        </div>
      )}
      </div>
    </>
  );
};

export default ProductDetailInfo;
