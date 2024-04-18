import ToggleSwitch from "./ToggleSwitch";

const RightSideHeader = ({ HeaderData }) => {
  console.log("HeaderData", HeaderData);
  return (
    <div className="bg-[#ededed]">
      {HeaderData.map((item, index) => {
        console.log(item);
        return (
          <div key={index} className="flex items-center justify-between p-2">
            <div>
              {item.left_side.map((leftItem, leftIndex) => {
                return (
                  <div className="text-[14px] text-slate-600" key={leftIndex}>
                    {leftItem.name.toUpperCase()}
                  </div>
                );
              })}
            </div>
            <div>
              {item.center.map((centerItem, centerIndex) => {
                return (
                  <div key={centerIndex} className="md:flex hidden">
                    <ToggleSwitch
                      frame={centerItem.frame}
                      view={centerItem.view}
                    />
                  </div>
                );
              })}
            </div>
            <div>
              {item.right_side.map((right_sideItem, right_sideIndex) => {
                return (
                  <div
                    key={right_sideIndex}
                    className="flex items-center gap-2"
                  >
                    <div className="text-[14px] flex items-center gap-1 text-green-600 font-[500]">
                      <div>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="square"
                            d="M3.667 1.667v10.666m0 0L1 9.667m2.667 2.666l2.666-2.666m4 2.666V1.667m0 0L7.667 4.333m2.666-2.666L13 4.333"
                          ></path>
                        </svg>
                      </div>
                      <div>{right_sideItem.sort_by}</div>
                    </div>
                    <div>
                      <select
                        name=""
                        id=""
                        className="text-[12px] p-1 border rounded outline-none"
                      >
                        {right_sideItem.select_data.map((select, index) => (
                          <option value="" key={index} className="text-[12px]">
                            {select}
                          </option>
                        ))}
                      </select>
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

export default RightSideHeader;
