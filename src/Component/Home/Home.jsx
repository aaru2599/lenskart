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
      {/* <HeaderOffCanvas/> */}
      <HomeSlider data={data} />
      <img
        src="/DoMoreBeMore/Domorebemore.webp"
        className="md:h-[230px]  object-contain"
        loading="lazy"
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
