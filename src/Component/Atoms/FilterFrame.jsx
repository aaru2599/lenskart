import React from "react";

const FilterFrame = ({ data }) => {
  //   const data = FrameType;
  console.log("Filter frame data", data);
  return (
    <div className="py-3">
      <div className="grid grid-cols-3  gap-3  ">
        {data.map((item) => (
          <div
            key={item.frame_name}
            className="border flex flex-col justify-center items-center rounded p-1 "
          >
            <img src={item.frame_image} alt={item.frame_name} className="w-[50px] h-[30px] object-contain"/>
            <div className="text-slate-600 text-[12px]">{item.frame_name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterFrame;
