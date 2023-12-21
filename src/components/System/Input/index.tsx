import React, {useState} from "react";
import {InputBox} from "./styles";
import Typo from "../Typo";
import Switch from "./Switch";
import Slider from "./Slider";
import Select from "./Select";
import Toggle from "./Toggle";
import Label from "./Label";
import ColorPicker from "./ColorPicker";

export type InputProps = {
  size?: "xs" | "sm" | "md" | "lg";
  disabled?: boolean;
  placeholder?: string;
  error?: string;
  info?: string;
  prefix?: React.ReactNode;
  width?: number;
  value?: string;
};
function Input({
  size = "sm",
  disabled = false,
  placeholder,
  error,
  info,
  prefix,
  width,
  value,
}: InputProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <InputBox
        $width={width}
        size={size}
        $focused={focused}
        disabled={disabled}
        $error={!!error}
      >
        {prefix ? <div className="prefix">{prefix}</div> : null}
        <input
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          type="text"
          disabled={disabled}
          placeholder={placeholder}
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
export default Input;
