import React from "react";
import * as RToggleGroup from "@radix-ui/react-toggle-group";
import {ToggleBox, ToggleGroupBox} from "./styles";
export type ToggleGroupProps = {
  size?: "sm" | "md" | "lg";
  data?: {
    value: string;
    icon: React.ReactNode;
    text?: string;
  }[];
};
function ToggleGroup({size = "sm", data}: ToggleGroupProps) {
  return (
    <div>
      <ToggleGroupBox
        size={size}
        type="single"
        defaultValue="center"
        aria-label="Text alignment"
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
    </div>
  );
}
export type ToggleProps = {
  size?: "sm" | "md" | "lg";
  value: string;
  icon: React.ReactNode;
  text?: string;
};
function Toggle({size = "sm", text, icon}: ToggleProps) {
  return (
    <ToggleBox size={size} aria-label="Toggle italic">
      {icon}
      {text ? <span className="toggle-text">{text}</span> : <></>}
    </ToggleBox>
  );
}

Toggle.Group = ToggleGroup;
export default Toggle;
