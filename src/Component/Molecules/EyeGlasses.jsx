import EyeglassCard from "../Atoms/EyeglassCard";
import Wishlist from "../Atoms/Modal/WishlistModal";
import { EyeglassesData } from "../Data/EyeglassesData";

const EyeGlasses = () => {
  const data = EyeglassesData;
  return (
    <>
    <div className="flex">
    <div style={{flex:"20%"}}>

    </div >
      <div style={{flex:"80%"}} className="grid grid-cols-4 gap-2 p-4">
        <EyeglassCard data={data} />
      </div>
    </div>
    <div>
      <Wishlist/>
    </div>
    </>
  );
};

export default EyeGlasses;
