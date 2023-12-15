import React from "react";
import Typo from "../Typo";
import {LabelBox} from "./styles";

export type LabelProps = {
  children: React.ReactNode;
  direction?: "vertical" | "horizontal";
  title: string;
  desc?: string;
  size?: "sm" | "lg";
};
export default function Label({
  children,
  direction = "vertical",
  title,
  desc,
  size = "lg",
}: LabelProps) {
  return (
    <LabelBox $direction={direction}>
      {direction === "vertical" ? (
        <div>
          {size === "sm" ? (
            <>
              <Typo.Body whiteSpace="nowrap" weight="medium" className="label-head">
                {title}
              </Typo.Body>
              <Typo.Desc className="label-sub">{desc}</Typo.Desc>
            </>
          ) : (
            <>
              <Typo.Desc whiteSpace="nowrap" color="primary" className="label-head">
                {title}
              </Typo.Desc>
              <Typo.Desc className="label-sub">{desc}</Typo.Desc>
            </>
          )}
        </div>
      ) : size === "sm" ? (
        <Typo.Desc whiteSpace="nowrap" color="primary" className="label-head">
          {title} :
        </Typo.Desc>
      ) : (
        <Typo.Body whiteSpace="nowrap" weight="regular" className="label-head">
          {title} :
        </Typo.Body>
      )}
      {children}
    </LabelBox>
  );
}
