import React from "react";
import {BodyTypo, DescTypo, HeadingTypo} from "./styles";

export type TypoProps = {
  color?: "primary" | "secondary" | "alternate" | "highlight" | "danger";
  children?: React.ReactNode;
  mt?: number;
  mb?: number;
  align?: "left" | "center" | "right";
  className?: string;
  whiteSpace?: "normal" | "nowrap";
};
function Typo() {
  return <></>;
}
export type HeadingProps = {level?: 1 | 2 | 3 | 4 | 5} & TypoProps;
function Heading({
  color = "primary",
  level = 2,
  children,
  align = "left",
  mt = 0,
  mb = 0,
  className,
  whiteSpace = "normal",
}: HeadingProps) {
  return (
    <HeadingTypo
      className={className}
      color={color}
      $level={level}
      $align={align}
      $mt={mt}
      $mb={mb}
      $whiteSpace={whiteSpace}
    >
      {children}
    </HeadingTypo>
  );
}
export type BodyProps = {weight?: "regular" | "medium" | "strong"} & TypoProps;
function Body({
  color = "primary",
  weight = "regular",
  children,
  align = "left",
  mt = 0,
  mb = 0,
  className,
  whiteSpace = "normal",
}: BodyProps) {
  return (
    <BodyTypo
      className={className}
      color={color}
      $weight={weight}
      $align={align}
      $mt={mt}
      $mb={mb}
      $whiteSpace={whiteSpace}
    >
      {children}
    </BodyTypo>
  );
}
type DescProps = {} & TypoProps;
function Desc({
  className,
  color = "primary",
  children,
  align = "left",
  mt = 0,
  mb = 0,
  whiteSpace = "normal",
}: DescProps) {
  return (
    <DescTypo
      className={className}
      color={color}
      $align={align}
      $mt={mt}
      $mb={mb}
      $whiteSpace={whiteSpace}
    >
      {children}
    </DescTypo>
  );
}
Typo.Body = Body;
Typo.Heading = Heading;
Typo.Desc = Desc;
export default Typo;
