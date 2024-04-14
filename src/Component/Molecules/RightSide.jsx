import React from "react";
import EyeglassCard from "../Atoms/EyeglassCard";
import { EyeglassesData } from "../Data/EyeglassesData";
import RightSideHeader from "../Atoms/RightSIdeHeader";


const RightSide = () => {
    const data = EyeglassesData;
  return (
    < >
    
      <EyeglassCard data={data} />
    </>
  );
};

export default RightSide;
