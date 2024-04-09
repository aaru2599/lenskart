import React from "react";
import EyeglassCard from "../Atoms/EyeglassCard";
import { EyeglassesData } from "../Data/EyeglassesData";


const RightSide = () => {
    const data = EyeglassesData;
  return (
    <div style={{ flex: "80%" }} className="p-4">
      <EyeglassCard data={data} />
    </div>
  );
};

export default RightSide;
