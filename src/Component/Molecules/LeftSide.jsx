import React from "react";
import AgeGroup from "./AgeGroup";
import FrameType from "./FrameType";
import FrameShape from "./FrameShape";

const LeftSide = () => {
  return (
    <div className="sticky top-[114px] p-2">
      <AgeGroup />
      <FrameType />
      <FrameShape />
    </div>
  );
};

export default LeftSide;
