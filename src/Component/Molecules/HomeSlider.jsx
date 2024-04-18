import React from "react";
import Carousel from "react-multi-carousel";
import Image from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "/src/index.css"
import { HomeSliderData } from "../Data/HomeSliderData";

const HomeSlider = () => {
  const data = HomeSliderData;
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=" w-[100%] md:h-[350px] h-[110px] z-0"
        containerClass=""
        dotListClass=""
        draggable={false}
        showDots={false}
        autoPlay={true}
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl={true}
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
        
        sliderClass=""
        slidesToSlide={1}
        swipeable={false}
        
      >
        {data.map((item) => (
          <a href="" key={item.id}>
          <img 
          loading="lazy" src={item.image} className="w-[100%] md:h-[100%] "/>

          </a>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeSlider;
