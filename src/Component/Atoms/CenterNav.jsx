import React from "react";
import { CenterNavData } from "../Data/CenterNavData";
import { Link } from "react-router-dom";
import Button from "./Button";
import "/src/index.css"
import HeaderOffCanvas from "./HeaderOffCanvas";
const navData = CenterNavData;
const CenterNav = () => {
  const scrollTopTop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  return (
    <div className="md:p-2 ">
      {navData.map((data, index) => {
        return (
          <div key={index} className="flex md:justify-between md:items-center items-center gap-2 ">
            <Link to={"/"} className="flex  no-underline">
              {data.left.map((leftItem, index) => (
                <img
                  src={leftItem}
                  alt=""
                  key={index}

                  className=" object-contain w-[100%] h-[50px]"
                  onClick={scrollTopTop}
                />
              ))}
            </Link>
            <div className="w-[500px] h-[100%] border  rounded-md ">
              <input
                className="w-[100%] h-[100%] p-1  rounded-md border-0 outline-0"
                type="text"
                placeholder="What are you looking for?"
              />
            </div>
         <div><HeaderOffCanvas/></div>
            <div className="hidden md:flex items-center gap-4">
              {data.right.map((rightItem, rightIndex) => (
                <div className="flex items-center gap-2" key={rightIndex}>
                  {rightItem.icon && (
                    <img src={rightItem.icon} alt={rightItem.name} className="w-[16px] h-[16px]"  />
                  )}
                  <Link href="" className="text-[14px] no-underline text-black">
                    {rightItem.name}
                  </Link>
                </div>
              ))}

             <Button data={"Contact Us"}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CenterNav;
