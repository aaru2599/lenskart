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
                      <img src={brandItem.brand_banner} alt="" />
                    </a>
                    <div
                      className={`${
                        brandItem.sunglasses
                          ? "flex justify-between"
                          : "flex justify-center"
                      } `}
                    >
                      <div className="">
                        {brandItem.eyeglasses.map((eyeItem, eyeIndex) => {
                          return (
                            <div key={eyeIndex}>
                              <div className="text-center text-[20px] underline p-4 font-[500]">
                                {eyeItem.name.toUpperCase()}
                              </div>
                              <div className=" grid grid-cols-3 gap-4">
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
                                <div className="text-center text-[20px] underline font-[500] p-4">
                                  {eyeItem.name.toUpperCase()}
                                </div>
                                <div className="  grid grid-cols-3 gap-4">
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
