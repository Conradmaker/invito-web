import React from "react";
import * as RSwitch from "@radix-ui/react-switch";
import {SwitchBox} from "./styles";

export type SwitchProps = {
  size: "sm" | "md" | "lg";
};
export default function Switch({size = "sm"}: SwitchProps) {
  return (
    <SwitchBox size={size}>
      <RSwitch.Thumb className="radix-switch-thumb" />
    </SwitchBox>
  );
}
