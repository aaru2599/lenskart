import React from "react";
import { BottomNavData } from "../Data/BottomNavData";
import { Link } from "react-router-dom";
const bottomNav = BottomNavData;
const BottomNavbar = () => {
  const scrollToTop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  return (
    <div className=" p-3">
      {bottomNav.map((item, index) => {
        return (
          <div key={index} className="flex justify-between items-center">
            <div className="flex gap-3 justify-between items-center">
              {item.left.map((leftItem, leftIndex) => {
                return (
                  <div key={leftIndex}>
                    <Link onClick={scrollToTop} to={leftItem.link} href="" className="tracking-[1px] hover:bg-slate-300 p-2 rounded text-[13px] font-[500]">{leftItem.name}</Link>
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
