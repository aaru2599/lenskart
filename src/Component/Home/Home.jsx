import React from "react";
import HomeSlider from "../Molecules/HomeSlider";
import { HomeSliderData } from "../Data/HomeSliderData";
import TrendingWear from "../Molecules/TrendingWear";
import { TrendingData } from "../Data/TrendingData";
import FeaturesCelebs from "../Molecules/FeaturesCelebs";
import Brands from "../Molecules/Brands";

const Home = () => {
  const data = HomeSliderData;
  const trendingData = TrendingData;
  return (
    <div className="">
      <HomeSlider data={data} />
      <img
        src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"
        className="w-[100%] h-[100%]"
        alt=""
      />

      <div className="py-4">
        <TrendingWear data={trendingData} />
      </div>
      <FeaturesCelebs />
      <Brands/>
    </div>
  );
};

export default Home;
