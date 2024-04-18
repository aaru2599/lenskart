import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "/src/Component/Molecules/ProductDetailsSlider.css";
import SliderPrevArrow from "../Atoms/Modal/SliderPrevArrow";
import SliderNextArrow from "../Atoms/Modal/SliderNextArrow";
function ProductDetailSlider({ imgLink, setClickImage }) {
  const [selectedImage, setSelectedImage] = useState(null);
  // console.log("imgLink",imgLink);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    // centerMode: true,
    // className: "center",
    focusOnSelect: true,
    // centerPadding: "60px",

    
   
    // initialSlide: 2,
    prevArrow: <SliderPrevArrow />,
    nextArrow: <SliderNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const onImageClick = (imgUrl) => {
    setClickImage(imgUrl);
    setSelectedImage(imgUrl);
    console.log("e.target.value", imgUrl);
  };
  return (
    <div className="slider-container md:w-[600px] w-[330px] ">
      <Slider {...settings}>
        {imgLink.map((imgData, index) => {
          return (
            <div key={index} className=" border-none ">
              <img
                src={imgData}
                onClick={() => onImageClick(imgData)}
                alt=""
                loading="lazy"
                className={`w-[80px] h-[80px] p-2   border rounded focus:border-2 ${
                  imgData == selectedImage ? "border-black" : ""
                } `}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProductDetailSlider;
