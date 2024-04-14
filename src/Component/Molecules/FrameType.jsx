import React from "react";
import { FrameTypeData } from "../Data/FrameTypeData/";
import FilterHeading from "../Atoms/FilterHeading";
import FilterFrame from "../Atoms/FilterFrame";

const FrameType = () => {
  const data = FrameTypeData;
  return (
    <div>
      <FilterHeading heading={"Frame Type"} />
      <FilterFrame data={data} />
    </div>
  );
};

export default FrameType;
