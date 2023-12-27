import React from "react";
import * as RSwitch from "@radix-ui/react-switch";
import {SwitchBox} from "./styles";

export type SwitchProps = {
  size: "xs" | "sm" | "md" | "lg";
  checked?: boolean;
  onChange?: (v: boolean) => void;
};
export default function Switch({size = "sm", onChange, checked}: SwitchProps) {
  return (
    <SwitchBox size={size} onCheckedChange={onChange} checked={checked}>
      <RSwitch.Thumb className="radix-switch-thumb" />
    </SwitchBox>
  );
}
