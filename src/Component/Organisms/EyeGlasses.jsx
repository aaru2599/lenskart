import { Wrapper } from "../../App";
import RightSideHeader from "../Atoms/RightSIdeHeader";
import TopNavbar from "../Atoms/TopNavbar";
import Header from "../Molecules/Header";
import LeftSide from "../Molecules/LeftSide";
import RightSide from "../Molecules/RightSide";

const HeaderData = [
  {
    left_side: [{ name: "EyeGlasses" }],
    center: [
      {
        frame: "VIEW FRAMES",
        view: "VIEW 3D TRY ON",
      },
    ],
    right_side: [
      {
        sort_by: "SORT BY",
        select_data: [
          "Best Sellers",
          "Price:Low To High",
          "Price:High To Low",
          "New",
          "Biggest Saving",
          "Most Viewed",
        ],
      },
    ],
  },
];
const EyeGlasses = () => {
  return (
   <Wrapper>
     <div className="relative">
      <TopNavbar />
      <div className="sticky top-0 z-10 bg-white">
        <Header />
      </div>
      <div className="relative">
        <img
          src="/Eyeglasses/EyeglassesBanner.webp"
          alt=""
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
      <div className="flex gap-2 relative ">
        <div style={{ flex: "25%" }}>
          <LeftSide />
        </div>
        <div className=" border-l " style={{ flex: "100%" }}>
          <div className="sticky top-[113px] z-50   bg-white">
            <RightSideHeader HeaderData={HeaderData}/>
          </div>
         <div className="p-4">
         <RightSide />
         
         </div>
        </div>
      </div>
      <div>{/* <Wishlist /> */}</div>
    </div>
   </Wrapper>
  );
};

export default EyeGlasses;
