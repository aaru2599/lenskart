import React from "react";

const BrandImage = ({ imgUrl }) => {
  return (
    <a href="" className="border rounded flex justify-center items-center  md:w-[150px] w-[80px] h-[60px] md:h-[120px] ">
      <img loading="lazy" src={imgUrl} alt="" className=" ease-in md:p-4 p-2 transition-transform transform-gpu hover:scale-105 object-contain rounded" />
    </a>
  );
};

export default BrandImage;
