import React from "react";
import {ColorPicker as CP, useColor} from "react-color-palette";
import "react-color-palette/css";
import {RiSquareFill} from "react-icons/ri";
import Input from ".";
import Pop from "../Pop";
import {ColorPickerSt} from "./styles";

type ColorPickerProps = {
  size: "xs" | "sm" | "md" | "lg";
};
export default function ColorPicker({size = "sm"}: ColorPickerProps) {
  const [color, setColor] = useColor("#561ecb");

  return (
    <Pop
      content={
        <ColorPickerSt>
          <CP color={color} hideAlpha hideInput={["hsv", "rgb"]} onChange={setColor} />
        </ColorPickerSt>
      }
    >
      <div className="cursor-pointer">
        <Input
          size={size}
          prefix={<RiSquareFill color={color.hex} />}
          value={color.hex}
        />
      </div>
    </Pop>
  );
}
