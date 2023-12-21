import React from "react";
import * as RAccordion from "@radix-ui/react-accordion";
import {AccordionBox} from "./styles";
import Button from "../Button";
import Typo from "../Typo";
import {RiArrowRightSLine} from "react-icons/ri";

type AccordionProps = {
  data?: {title: string; content: React.ReactNode}[];
  type?: "single" | "multiple";
  defaultOpenIdx?: number | number[];
};
export default function Accordion({
  data,
  type = "single",
  defaultOpenIdx,
}: AccordionProps) {
  return (
    <div>
      <AccordionBox
        asChild
        className="AccordionRoot"
        type={type}
        defaultValue={
          Array.isArray(defaultOpenIdx)
            ? (defaultOpenIdx?.map((v) => v + "") as any)
            : ((defaultOpenIdx + "") as any)
        }
      >
        <div>
          {data?.map((item, index) => (
            <RAccordion.Item className="accordion-item" value={index + ""} key={index}>
              <RAccordion.Header className="accordion-header">
                <RAccordion.Trigger className="accordion-trigger" asChild>
                  <div>
                    <Typo.Body weight="medium">{item.title}</Typo.Body>
                    <Button.Icon type="ghost" size="xs" className="accordion-btn">
                      <RiArrowRightSLine />
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
