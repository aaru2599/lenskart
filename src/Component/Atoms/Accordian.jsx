import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "/src/Component/Atoms/Accordian.css";

function Accordian({ accordianData }) {
  console.log("accordianData", accordianData);

  return (
    <div className=" flex flex-col gap-2">
      {accordianData &&
        accordianData.map((item, index) => {
          return (
            <Accordion allowZeroExpanded key={index} className=" ">
              <AccordionItem className="">
                <AccordionItemHeading className="">
                  <AccordionItemButton>{item.heading}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {item.tech_info &&
                    item.tech_info.map((items, itemIndex) => {
                      return (
                        <div key={itemIndex}>
                          <div className="flex justify-between">
                            <div className="text-[14px] font-[500]">
                              Product Id
                            </div>
                            <div className="text-[13px]">{items.ProductId}</div>
                          </div>
                          <div className="flex justify-between">
                            <div className="text-[14px] font-[500]">
                              Model No.
                            </div>
                            <div className="text-[13px]">{items.ModelNo}</div>
                          </div>{" "}
                          <div className="flex justify-between">
                            <div className="text-[14px] font-[500]">
                              Frame Size
                            </div>
                            <div className="text-[13px]">{items.FrameSize}</div>
                          </div>{" "}
                          <div className="flex justify-between">
                            <div className="text-[14px] font-[500]">
                              Frame Width
                            </div>
                            <div className="text-[13px]">
                              {items.FrameWidth}
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <div className="text-[14px] font-[500]">
                              Frame Dimensions
                            </div>
                            <div className="text-[13px]">
                              {items.FrameDimensions}
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <div className="text-[14px] font-[500]">
                              Suited For
                            </div>
                            <div className="text-[13px]">i</div>
                          </div>
                          <div className="flex justify-between">
                            <div className="text-[14px] font-[500]"></div>
                          </div>
                        </div>
                      );
                    })}
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          );
        })}
    </div>
  );
}

export default Accordian;
