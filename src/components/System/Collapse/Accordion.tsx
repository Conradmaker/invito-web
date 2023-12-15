import React from "react";
import * as RAccordion from "@radix-ui/react-accordion";
import {AccordionBox} from "./styles";
import {RxCaretDown, RxCaretRight} from "react-icons/rx";
import Button from "../Button";
import Typo from "../Typo";

type AccordionProps = {
  data?: {title: string; content: React.ReactNode}[];
};
export default function Accordion({data}: AccordionProps) {
  return (
    <div>
      <AccordionBox
        asChild
        className="AccordionRoot"
        type="single"
        defaultValue={"1"}
        collapsible
      >
        <div>
          {data?.map((item, index) => (
            <RAccordion.Item className="accordion-item" value={index + ""} key={index}>
              <RAccordion.Header className="accordion-header">
                <RAccordion.Trigger className="accordion-trigger" asChild>
                  <div>
                    <Typo.Body weight="medium">구성요소</Typo.Body>
                    <Button.Icon type="ghost" className="accordion-btn">
                      <RxCaretRight />
                    </Button.Icon>
                  </div>
                </RAccordion.Trigger>
              </RAccordion.Header>
              <RAccordion.Content className="accordion-content-box">
                <div className="accordion-content">{item.content}</div>
              </RAccordion.Content>
            </RAccordion.Item>
          ))}
        </div>
      </AccordionBox>
    </div>
  );
}
