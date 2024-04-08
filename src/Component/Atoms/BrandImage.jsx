import React from "react";

const BrandImage = ({ imgUrl }) => {
  return (
    <div className="">
      <img src={imgUrl} alt="" className="w-[200px] h-[150px] border object-contain rounded" />
    </div>
  );
};

export default BrandImage;
