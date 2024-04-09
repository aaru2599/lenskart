import React from "react";

const BrandImage = ({ imgUrl }) => {
  return (
    <a href="" className="">
      <img src={imgUrl} alt="" className="border w-[200px] h-[150px] object-contain rounded" />
    </a>
  );
};

export default BrandImage;
