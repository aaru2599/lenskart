import React from "react";
import { AgeGroupData } from "../Data/AgeGroupData";
import FilterHeading from "../Atoms/FilterHeading";

const AgeGroup = () => {
  const data = AgeGroupData;
  return (
    <div>
      {data.map((item, index) => {
        return (
          <>
            <FilterHeading heading={"Age Group"} />

            <div className=" py-2">
              {item.filter.map((filterItem) => {
                return (
                  <div
                    key={filterItem.titleId}
                    className="flex items-center   gap-3"
                  >
                    <input type="checkbox" />
                    <div>{filterItem.age_group}</div>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default AgeGroup;
