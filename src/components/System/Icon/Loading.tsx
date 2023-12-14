import React from "react";
import {TypoProps} from "../Typo";
import {IconSt} from "./styles";
import {theme} from "@/libs/theme";

const getColor = (color: IconProps["color"]) => {
  switch (color) {
    default:
    case "primary":
      return theme.colors.neutral[900];
    case "secondary":
      return theme.colors.neutral[500];
    case "alternate":
      return theme.colors.neutral[0];
    case "highlight":
      return theme.colors.primary[300];
  }
};

export type IconProps = {
  size?: number;
  color?: TypoProps["color"];
};
export default function Loading({size = 24, color = "primary"}: IconProps) {
  return (
    <IconSt>
      <svg
        width={size}
        height={size}
        stroke={getColor(color)}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`.spinner_V8m1{transform-origin:center;animation:spinner_zKoa 2s linear infinite}.spinner_V8m1 circle{stroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite}@keyframes spinner_zKoa{100%{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%{stroke-dasharray:42 150;stroke-dashoffset:-16}95%,100%{stroke-dasharray:42 150;stroke-dashoffset:-59}}`}</style>
        <g className="spinner_V8m1">
          <circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3"></circle>
        </g>
      </svg>
    </IconSt>
  );
}
