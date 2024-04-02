import EyeglassCard from "../Atoms/EyeglassCard";
import Wishlist from "../Atoms/Modal/WishlistModal";
import { EyeglassesData } from "../Data/EyeglassesData";
import AgeGroup from "../Molecules/AgeGroup";
import LeftSide from "../Molecules/LeftSide";
import RightSide from "../Molecules/RightSide";

const EyeGlasses = () => {
  
  return (
    <>
      <div className="flex">
        <LeftSide />
        <RightSide />
      </div>
      <div>
        <Wishlist />
      </div>
    </>
  );
};

export default EyeGlasses;
