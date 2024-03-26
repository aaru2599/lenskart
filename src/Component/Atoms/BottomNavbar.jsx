import React from "react";
import { BottomNavData } from "../Data/BottomNavData";
const bottomNav = BottomNavData;
const BottomNavbar = () => {
  return (
    <div className=" p-3">
      {bottomNav.map((item, index) => {
        return (
          <div key={index} className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              {item.left.map((leftItem, leftIndex) => {
                return (
                  <div key={leftIndex}>
                    <a href="">{leftItem.name}</a>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-2  items-center">
              {item.right.map((rightItem, rightIndex) => {
                return (
                  <a href="" key={rightIndex}>
                    <img src={rightItem.image} alt="" width={60} className="rounded" />
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BottomNavbar;
