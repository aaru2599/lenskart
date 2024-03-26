import React from "react";
import { CenterNavData } from "../Data/CenterNavData";
const navData = CenterNavData;
const CenterNav = () => {
  return (
    <div className="p-2">
      {navData.map((data, index) => {
        return (
          <div key={index} className="flex justify-between items-center">
            <div className="flex  gap-[30px]">
              {data.left.map((leftItem, index) => (
                <img
                  src={leftItem}
                  alt=""
                  key={index}
                  width={150}
                  className=" object-contain"
                />
              ))}
            </div>
            <div className="w-[400px] border  rounded-md ">
              <input
                className="w-[100%] p-1  rounded-md border-0 outline-0"
                type="text"
                placeholder="What are you looking for?"
              />
            </div>
            <div className="flex items-center gap-4">
              {data.right.map((rightItem, rightIndex) => (
                <div className="flex items-center gap-2" key={rightIndex}>
                  {rightItem.icon && (
                    <img src={rightItem.icon} alt={rightItem.name} />
                  )}
                  <div>{rightItem.name}</div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CenterNav;
