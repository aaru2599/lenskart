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
                  <div key={centerIndex} className="flex">
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
                  <div key={right_sideIndex} className="flex items-center gap-2">
                    <div className="text-[14px]">{right_sideItem.sort_by}</div>
                    <div>
                      <select name="" id="" className="text-[12px] p-1 border rounded outline-none">
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
