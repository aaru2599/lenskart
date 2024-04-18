import React from "react";
import { FeaturedCelebsData } from "../Data/FeaturedCelebsData";
import FeaturedHeading from "../Atoms/FeaturedHeading";

const FeaturesCelebs = () => {
  const data = FeaturedCelebsData;
  return (
    <div className="flex flex-col md:gap-[25px] gap-[10px]">
      {data.map((item, index) => {
        return (
          <div key={index} className="border-b md:pb-4 pb-2">
            <FeaturedHeading heading={item.heading} />
            <div className={`${item.image.length>1?"grid grid-cols-2 gap-2":"flex w-[100%]"}`}>
              {item.image.map((imgItem, imgIndex) => {
                return (
                  <a href="" key={imgIndex} className="">
                    <img className=" md:h-[370px] object-contain " src={imgItem} alt=""  />
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

export default FeaturesCelebs;
