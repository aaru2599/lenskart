import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
// import 'react-accessible-accordion/dist/fancy-example.css';

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

function Accordian({ accordianData }) {
  console.log("accordianData", accordianData);
  return (
    <>
      {accordianData &&
        accordianData.map((data, index) => {
          return (
            <Accordion key={index} className="w-[500px]">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>{data.heading}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {data.data.map((items, index) => {
                    return (
                      <div key={index}>
                        <div className="flex justify-between">
                          <div>Product Id</div>
                          <div>{items.ProductId}</div>
                        </div>
                        <div className="flex justify-between">
                          <div>Model No.</div>
                          <div>{items.ModelNo}</div>
                        </div>{" "}
                        <div className="flex justify-between">
                          <div>Frame Size</div>
                          <div>{items.FrameSize}</div>
                        </div>{" "}
                        <div className="flex justify-between">
                          <div>Frame Width</div>
                          <div>{items.FrameWidth}</div>
                        </div>
                        <div className="flex justify-between">
                          <div>Frame Dimensions</div>
                          <div>{items.FrameDimensions}</div>
                        </div>
                        <div className="flex justify-between">
                          <div>Suited For</div>
                          <div>i</div>
                        </div>
                        <div className="flex justify-between">
                          <div>Suited For</div>
                        </div>
                      </div>
                    );
                  })}
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          );
        })}
    </>
  );
}
export default Accordian;
