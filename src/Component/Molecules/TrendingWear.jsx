import Button from "../Atoms/Button";

const TrendingWear = ({ data }) => {
  console.log("trandingData", data);
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div className="flex items-center gap-2 md:justify-start justify-center ">
              <div className="border-b-2 border-slate-400 md:w-[50px] w-[25px]"></div>
              <div className="flex items-center gap-1">
                <span className="font-[500] md:text-[20px] text-[13px]">{item.heading1}</span>
                <span className="font-semibold  md:text-[26px] text-[16px]">
                  {item.heading2}
                </span>
                <span className="font-[500] md:text-[18px] text-[12px]">{item.heading3}</span>
              </div>
            </div>
            <div className=" flex md:justify-between w-[100%] overflow-hidden overflow-x-auto md:overflow-x-hidden scrollable-data  ">
              {item.glass_data.map((cardItem, cardIndex) => {
                return (
                  <div
                    key={cardIndex}
                    className="  w-[150px] h-[150px]    p-4 flex flex-col gap-2  justify-center items-center"
                  >
                    <div>
                      <img
                        src={cardItem.glass_img}
                        className="w-[150px] h-[70px] object-contain"
                        alt=""
                      />
                    </div>
                    <div className="font-[500] md:text-[14px]">{cardItem.title}</div>
                    <Button data={"Explore"} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TrendingWear;
