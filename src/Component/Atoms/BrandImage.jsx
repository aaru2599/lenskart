import React from "react";

const BrandImage = ({ imgUrl }) => {
  return (
    <a href="" className="border rounded">
      <img loading="lazy" src={imgUrl} alt="" className=" ease-in md:p-4 p-2 transition-transform transform-gpu hover:scale-105  md:w-[190px] w-[80px] h-[60px] md:h-[150px] object-contain rounded" />
    </a>
  );
};

export default BrandImage;
