import React from "react";
import * as RToggleGroup from "@radix-ui/react-toggle-group";
import {ToggleBox, ToggleGroupBox} from "./styles";
export type ToggleGroupProps = {
  size?: "xs" | "sm" | "md" | "lg";
  block?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  data?: {
    value: string;
    icon: React.ReactNode;
    text?: string;
  }[];
};
function ToggleGroup({
  size = "sm",
  data,
  block = false,
  value,
  onChange,
}: ToggleGroupProps) {
  return (
    <ToggleGroupBox
      $block={block}
      size={size}
      type="single"
      defaultValue="center"
      aria-label="Text alignment"
      value={value}
      onValueChange={onChange}
    >
      {data?.map((item, index) => (
        <RToggleGroup.Item
          key={index}
          className="toggle-group-item"
          value={item.value}
          aria-label="Left aligned"
        >
          {item.icon}
          {item.text ? <span className="toggle-text">{item.text}</span> : <></>}
        </RToggleGroup.Item>
      ))}
    </ToggleGroupBox>
  );
}
export type ToggleProps = {
  size?: "xs" | "sm" | "md" | "lg";
  block?: boolean;
  value: string;
  icon: React.ReactNode;
  text?: string;
};
function Toggle({size = "sm", text, icon, block = false}: ToggleProps) {
  return (
    <ToggleBox size={size} aria-label="Toggle italic" $block={block}>
      {icon}
      {text ? <span className="toggle-text">{text}</span> : <></>}
    </ToggleBox>
  );
}

Toggle.Group = ToggleGroup;
export default Toggle;
