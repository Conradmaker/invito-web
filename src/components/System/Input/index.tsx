import React, {useState} from "react";
import {InputBox} from "./styles";
import Typo from "../Typo";
import Switch from "./Switch";
import Slider from "./Slider";
import Select from "./Select";
import Toggle from "./Toggle";
import Label from "./Label";
import ColorPicker from "./ColorPicker";
import Image from "./Image";

export type InputProps = {
  size?: "xs" | "sm" | "md" | "lg";
  disabled?: boolean;
  placeholder?: string;
  error?: string;
  info?: string;
  prefix?: React.ReactNode;
  width?: number;
  value?: string | number;
  textAlign?: "left" | "center" | "right";
  bordered?: boolean;
  className?: string;
  type?: "text" | "number" | "password";
  min?: number;
  max?: number;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  block?: boolean;
};
function Input({
  size = "sm",
  disabled = false,
  error,
  info,
  prefix,
  width,
  textAlign = "left",
  bordered = true,
  className,
  type = "text",
  value,
  min,
  max,
  maxLength,
  placeholder,
  onChange,
  block,
}: InputProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div className={className}>
      <InputBox
        $width={width}
        size={size}
        $focused={focused}
        disabled={disabled}
        $error={!!error}
        $bordered={bordered}
        $textAlign={textAlign}
        block={block}
      >
        {prefix ? <div className="prefix">{prefix}</div> : null}
        <input
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          type={type}
          disabled={disabled}
          min={min}
          max={max}
          maxLength={maxLength}
          placeholder={placeholder}
          value={type === "number" ? Number(value) || "0" : value}
          onChange={onChange}
        />
      </InputBox>
      {error ? (
        <Typo.Body color="danger">&nbsp;{error}</Typo.Body>
      ) : info ? (
        <Typo.Body color="secondary">&nbsp;{info}</Typo.Body>
      ) : null}
    </div>
  );
}

Input.Switch = Switch;
Input.Slider = Slider;
Input.Select = Select;
Input.Label = Label;
Input.Toggle = Toggle;
Input.Color = ColorPicker;
Input.Image = Image;
export default Input;
