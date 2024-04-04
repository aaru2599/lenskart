import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderPrevArrow from "../Atoms/Modal/SliderPrevArrow";
import SliderNextArrow from "../Atoms/Modal/SliderNextArrow";
function ProductDetailSlider({imgLink}) {
    console.log("imgLink",imgLink);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    focusOnSelect: true,
    initialSlide: 0,
    nextArrow: <SliderPrevArrow />,
    prevArrow: <SliderNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container w-[500px] ">
      <Slider {...settings}>
       {
        imgLink.map((imgData,index)=>{
            return <div key={index} className="  gap-2">
                <img src={imgData}  alt="" className="w-[100px] h-[100px] p-2   border rounded" />
            </div>
        })
       }
      </Slider>
    </div>
  );
}

export default ProductDetailSlider;
