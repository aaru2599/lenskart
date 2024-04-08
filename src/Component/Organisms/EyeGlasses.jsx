import { Wrapper } from "../../App";
import EyeglassCard from "../Atoms/EyeglassCard";
import Wishlist from "../Atoms/Modal/WishlistModal";
import TopNavbar from "../Atoms/TopNavbar";
import { EyeglassesData } from "../Data/EyeglassesData";
import AgeGroup from "../Molecules/AgeGroup";
import Header from "../Molecules/Header";
import LeftSide from "../Molecules/LeftSide";
import RightSide from "../Molecules/RightSide";

const EyeGlasses = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-10 bg-white">
        <Header />
      </div>

      <div className="flex">
        <LeftSide />
        <RightSide />
      </div>
      <div>{/* <Wishlist /> */}</div>
    </div>
  );
};

export default EyeGlasses;
