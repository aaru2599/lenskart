import React from "react";
import Carousel from "react-multi-carousel";
import Image from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HomeSliderData } from "../Data/HomeSliderData";

const HomeSlider = () => {
  const data = HomeSliderData;
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={2000}
        centerMode={false}
        className=" flex justify-center"
        containerClass=""
        dotListClass="invisible"
        draggable
        autoPlay={true}
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={true}
        renderButtonGroupOutside={false}
    
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
        
      >
        {data.map((item) => (
          <img key={item.id} src={item.image} className="w-[100%]"/>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeSlider;
