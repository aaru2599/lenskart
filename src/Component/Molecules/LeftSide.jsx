import React from "react";
import AgeGroup from "./AgeGroup";
import FrameType from "./FrameType";
import FrameShape from "./FrameShape";

const LeftSide = () => {
  return (
    <div style={{ flex: "20%" }} className="p-4">
      <AgeGroup />
    <FrameType/>
    <FrameShape/> 
    </div>
  );
};

export default LeftSide;
