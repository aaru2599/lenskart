import TopNavbar from "../Atoms/TopNavbar";
import Header from "../Molecules/Header";
import LeftSide from "../Molecules/LeftSide";
import RightSide from "../Molecules/RightSide";

const EyeGlasses = () => {
  return (
    <div className="relative">
      <TopNavbar/>
      <div className="sticky top-0 z-10 bg-white">
        <Header />
      </div>

      <div className="flex relative ">
       
       <div className="sticky top-32">
       <LeftSide />
       </div>
     
        <RightSide />
      </div>
      <div>{/* <Wishlist /> */}</div>
    </div>
  );
};

export default EyeGlasses;
