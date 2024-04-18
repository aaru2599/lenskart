import React from "react";
import { OurBrandData } from "../Data/OurBrandsData";
import FeaturedHeading from "../Atoms/FeaturedHeading";
import BrandImage from "../Atoms/BrandImage";

const Brands = () => {
  const data = OurBrandData;
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <FeaturedHeading heading={item.heading} />
            </div>
            <div className="flex flex-col gap-4 ">
              {item.brand_data.map((brandItem, brandIndex) => {
                return (
                  <div key={brandIndex}>
                    <a href="">
                      <img src={brandItem.brand_banner} className="w-[100%] md:h-[245px] object-contain " alt="" />
                    </a>
                    <div
                      className={`${
                        brandItem.sunglasses
                          ? "flex justify-between gap-2"
                          : "flex justify-center"
                      } `}
                    >
                      <div className="">
                        {brandItem.eyeglasses.map((eyeItem, eyeIndex) => {
                          return (
                            <div key={eyeIndex}>
                              <div className="text-center md:text-[18px] text-[12px] underline md:p-4 p-2 font-[500] text-slate-600">
                                {eyeItem.name.toUpperCase()}
                              </div>
                              <div className={` grid md:grid-cols-3 ${brandItem.sunglasses?"grid-cols-2":"grid-cols-3"} md:gap-4 gap-2`}>
                                {eyeItem.image.map((img, index) => {
                                  return (
                                    <BrandImage imgUrl={img} key={index} />
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div>
                        {brandItem.sunglasses &&
                          brandItem.sunglasses.map((eyeItem, eyeIndex) => {
                            return (
                              <div key={eyeIndex}>
                                <div className="text-center md:text-[18px] text-[12px] text-slate-600  underline font-[500] md:p-4 p-2">
                                  {eyeItem.name.toUpperCase()}
                                </div>
                                <div className={` grid md:grid-cols-3 ${brandItem.eyeglasses?"grid-cols-2":"grid-cols-3"} md:gap-4 gap-2`}>
                                  {eyeItem.image.map((img, index) => {
                                    return (
                                      <BrandImage imgUrl={img} key={index} />
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Brands;
