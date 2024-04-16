import Button from "../Atoms/Button";

const TrendingWear = ({ data }) => {
  console.log("trandingData", data);
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div className="flex items-center gap-2">
              <div className="border-b-2 border-slate-400 w-[50px]"></div>
              <div className="flex items-center gap-1">
                <span className="font-[500] text-[20px]">{item.heading1}</span>
                <span className="font-semibold  text-[26px]">
                  {item.heading2}
                </span>
                <span className="font-[500]">{item.heading3}</span>
              </div>
            </div>
            <div className=" flex justify-between w-[100%]">
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
                    <div className="font-[500]">{cardItem.title}</div>
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
