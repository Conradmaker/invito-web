import React from "react";
import Typo from "../Typo";
import {LabelBox} from "./styles";

export type LabelProps = {
  children: React.ReactNode;
  direction?: "vertical" | "horizontal";
  title: string;
  desc?: string;
};
export default function Label({
  children,
  direction = "vertical",
  title,
  desc,
}: LabelProps) {
  return (
    <LabelBox $direction={direction}>
      {direction === "vertical" ? (
        <div>
          <Typo.Body weight="medium" className="label-head">
            {title}
          </Typo.Body>
          <Typo.Desc className="label-sub">{desc}</Typo.Desc>
        </div>
      ) : (
        <Typo.Body weight="regular" className="label-head">
          {title} :
        </Typo.Body>
      )}
      {children}
    </LabelBox>
  );
}
