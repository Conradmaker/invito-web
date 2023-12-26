import React from "react";
import {ColorPicker as CP, IColor, useColor} from "react-color-palette";
import "react-color-palette/css";
import {RiSquareFill} from "react-icons/ri";
import Input from ".";
import Pop from "../Pop";
import {ColorPickerSt} from "./styles";

type ColorPickerProps = {
  size: "xs" | "sm" | "md" | "lg";
  value?: string;
  onChange?: (color: string) => void;
};
export default function ColorPicker({size = "sm", value, onChange}: ColorPickerProps) {
  const [color, setColor] = useColor(value || "#561ecb");
  const onChangeColor = (color: IColor) => {
    setColor(color);
    onChange && onChange(color.hex);
  };
  return (
    <Pop
      content={
        <ColorPickerSt>
          <CP
            color={color}
            hideAlpha
            hideInput={["hsv", "rgb"]}
            onChange={onChangeColor}
          />
        </ColorPickerSt>
      }
    >
      <div className="cursor-pointer">
        <Input
          size={size}
          prefix={
            <div className="border">
              <RiSquareFill color={color.hex} />
            </div>
          }
          value={color.hex}
        />
      </div>
    </Pop>
  );
}
