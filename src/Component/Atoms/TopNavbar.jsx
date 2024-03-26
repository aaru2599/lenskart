import React from "react";
import { topNavList } from "../Data/TopNavList";
const navList=topNavList;
const TopNavbar = () => {
  console.log("topNavList", navList);
  return (
    <div className="p-2">
      {navList.map((item, index) => {
        return (
          <div key={index} className="flex justify-between">
            <div className="flex gap-4">
              {item.left.map((navData, index) => {
                return (
                  <a href="" key={index}>
                    {navData}
                  </a>
                );
              })}
            </div>
            <div>{item.right}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TopNavbar;
