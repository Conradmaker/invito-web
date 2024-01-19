import React from "react";
import {PillSt} from "./styles";

export type PillProps = {
  size?: "sm" | "md" | "lg";
  label: string;
  onClick?: () => void;
  color?: "white" | "blue" | "light-blue" | "gray" | "red" | "light-red" | "green";
};
export default function Pill({size, label, onClick, color}: PillProps) {
  return (
    <PillSt $color={color} $size={size} onClick={onClick}>
      {label}
    </PillSt>
  );
}
