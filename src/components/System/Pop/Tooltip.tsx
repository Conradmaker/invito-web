"use client";
import React from "react";
import * as RTooltip from "@radix-ui/react-tooltip";
import {TooltipContentSt} from "./styles";

export type TooltipProps = {
  children: React.ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
};
export default function Tooltip({children, content, position = "bottom"}: TooltipProps) {
  return (
    <div className="inline-flex">
      <RTooltip.Provider delayDuration={100}>
        <RTooltip.Root>
          <RTooltip.Trigger asChild>
            <div>{children}</div>
          </RTooltip.Trigger>
          <RTooltip.Portal>
            <TooltipContentSt side={position} sideOffset={5}>
              {content}
            </TooltipContentSt>
          </RTooltip.Portal>
        </RTooltip.Root>
      </RTooltip.Provider>
    </div>
  );
}
