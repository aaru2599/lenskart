import React from "react";
import { FeaturedCelebsData } from "../Data/FeaturedCelebsData";
import FeaturedHeading from "../Atoms/FeaturedHeading";

const FeaturesCelebs = () => {
  const data = FeaturedCelebsData;
  return (
    <div className="flex flex-col gap-[25px]">
      {data.map((item, index) => {
        return (
          <div key={index} className="border-b pb-4">
            <FeaturedHeading heading={item.heading} />
            <div className={`${item.image.length>1?"grid grid-cols-2 gap-2":"flex"}`}>
              {item.image.map((imgItem, imgIndex) => {
                return (
                  <a href="" key={imgIndex} className="">
                    <img className="w-[100%] h-[100%] object-contain" src={imgItem} alt=""  />
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
