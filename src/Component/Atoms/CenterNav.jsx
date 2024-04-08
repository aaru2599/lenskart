import React from "react";
import { CenterNavData } from "../Data/CenterNavData";
import { Link } from "react-router-dom";
const navData = CenterNavData;
const CenterNav = () => {
  return (
    <div className="p-2">
      {navData.map((data, index) => {
        return (
          <div key={index} className="flex justify-between items-center">
            <Link to={'/'} className="flex  gap-[30px]">
              {data.left.map((leftItem, index) => (
                <img
                  src={leftItem}
                  alt=""
                  key={index}
                  width={150}
                  className=" object-contain"
                />
              ))}
            </Link>
            <div className="w-[500px] border  rounded-md ">
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
                  <a href="" className="text-[14px]">{rightItem.name}</a>
                </div>
              ))}

<button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2">Contact Us</button>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CenterNav;
