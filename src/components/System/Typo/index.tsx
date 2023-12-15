import React from "react";
import {BodyTypo, DescTypo, HeadingTypo} from "./styles";

export type TypoProps = {
  color?: "primary" | "secondary" | "alternate" | "highlight" | "danger";
  children?: React.ReactNode;
  mt?: number;
  mb?: number;
  align?: "left" | "center" | "right";
  className?: string;
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
}: HeadingProps) {
  return (
    <HeadingTypo
      className={className}
      color={color}
      $level={level}
      $align={align}
      $mt={mt}
      $mb={mb}
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
}: BodyProps) {
  return (
    <BodyTypo
      className={className}
      color={color}
      $weight={weight}
      $align={align}
      $mt={mt}
      $mb={mb}
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
}: DescProps) {
  return (
    <DescTypo className={className} color={color} $align={align} $mt={mt} $mb={mb}>
      {children}
    </DescTypo>
  );
}
Typo.Body = Body;
Typo.Heading = Heading;
Typo.Desc = Desc;
export default Typo;
