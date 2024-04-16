import React, { useState } from "react";

const ToggleSwitch = ({ view, frame }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`flex items-center space-x-[6px] rounded py-1 px-[10px] text-[12px]  ${
            !isChecked ? "font-[500] bg-[#329c9247] " : ""
          }`}
        >
          {frame}
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded py-1 px-[10px] text-[12px] font-medium ${
            isChecked ? "text-primary bg-[#329c9247]" : "text-body-color"
          }`}
        >
          {view}
        </span>
      </label>
    </>
  );
};

export default ToggleSwitch;
