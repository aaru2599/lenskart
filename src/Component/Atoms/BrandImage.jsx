import React from "react";

const BrandImage = ({ imgUrl }) => {
  return (
    <a href="" className="border rounded">
      <img src={imgUrl} alt="" className=" ease-in p-4 transition-transform transform-gpu hover:scale-105  w-[200px] h-[150px] object-contain rounded" />
    </a>
  );
};

export default BrandImage;
