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

function Accordian({accordianData}) {
    console.log("accordianData",accordianData);
  return (
    <Accordion  className="w-[500px]">
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Lorem, ipsum.</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, maiores!</div></AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
export default Accordian;
