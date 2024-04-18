import { OurBrandData } from "../Data/OurBrandsData";
import FeaturedHeading from "../Atoms/FeaturedHeading";
import BrandImage from "../Atoms/BrandImage";

const Brands = () => {
  const data = OurBrandData;
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <FeaturedHeading heading={item.heading} />
            </div>
            <div className="flex flex-col gap-4 ">
              {item.brand_data.map((brandItem, brandIndex) => {
                return (
                  <div key={brandIndex}>
                    <a href="">
                      <img src={brandItem.brand_banner} loading="lazy" className="w-[100%] md:h-[245px] object-contain " alt="" />
                    </a>
                    <div
                      className={`flex justify-center md:gap-5 gap-3`}
                    >
                      <div className="">
                        {brandItem.eyeglasses.map((eyeItem, eyeIndex) => {
                          return (
                            <div key={eyeIndex}>
                              <div className="text-center md:text-[18px] text-[10px] underline md:p-4 p-2 font-[500] text-slate-600">
                                {eyeItem.name.toUpperCase()}
                              </div>
                              <div className={` grid  ${brandItem.sunglasses?"grid-cols-2 md:grid-cols-3 md:gap-6 gap-2":"grid-cols-3 md:grid-cols-6 md:gap-3 gap-2"} `}>
                                {eyeItem.image.map((img, index) => {
                                  return (
                                    <BrandImage imgUrl={img} key={index} />
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div>
                        {brandItem.sunglasses &&
                          brandItem.sunglasses.map((eyeItem, eyeIndex) => {
                            return (
                              <div key={eyeIndex}>
                                <div className="text-center md:text-[18px] text-[10px] text-slate-600  underline font-[500] md:p-4 p-2">
                                  {eyeItem.name.toUpperCase()}
                                </div>
                                <div className={` grid md:grid-cols-3 ${brandItem.eyeglasses?"grid-cols-2 md:grid-cols-3 md:gap-6 gap-2":"grid-cols-3 md:grid-cols-6 md:gap-6"} `}>
                                  {eyeItem.image.map((img, index) => {
                                    return (
                                      <BrandImage imgUrl={img} key={index} />
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Brands;
