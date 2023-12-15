import React from "react";
import * as RAccordion from "@radix-ui/react-accordion";
import {AccordionBox} from "./styles";
import {RxCaretRight} from "react-icons/rx";
import Button from "../Button";
import Typo from "../Typo";

type AccordionProps = {
  data?: {title: string; content: React.ReactNode}[];
  type?: "single" | "multiple";
};
export default function Accordion({data, type = "single"}: AccordionProps) {
  return (
    <div>
      <AccordionBox asChild className="AccordionRoot" type={type} collapsible>
        <div>
          {data?.map((item, index) => (
            <RAccordion.Item className="accordion-item" value={index + ""} key={index}>
              <RAccordion.Header className="accordion-header">
                <RAccordion.Trigger className="accordion-trigger" asChild>
                  <div>
                    <Typo.Body weight="medium">{item.title}</Typo.Body>
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
