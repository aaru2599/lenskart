import React, { useState } from "react";

const ToggleSwitch = ({ view, frame }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className=" shadow-card relative inline-flex cursor-pointer  items-center justify-center rounded bg-white md:p-1  h-[20px]  md:h-[100%]">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`flex items-center rounded md:py-1  md:px-[10px]  md:text-[12px]   text-[10px]${
            !isChecked ? " bg-[#329c9247] " : ""
          }`}
        >
          {frame}
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded md:py-1  md:px-[10px]  md:text-[12px] text-[10px] font-medium ${
            isChecked ? " bg-[#329c9247]" : "text-body-color"
          }`}
        >
          {view}
        </span>
      </label>
    </>
  );
};

export default ToggleSwitch;
