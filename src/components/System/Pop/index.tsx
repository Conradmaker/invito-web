import React from "react";
import Tooltip from "./Tooltip";
import * as Popover from "@radix-ui/react-popover";
import * as RTooltip from "@radix-ui/react-tooltip";
import {PopoverContentSt} from "./styles";
type PopProps = {
  children: React.ReactNode;
  content?: React.ReactNode;
  direction?: "top" | "bottom" | "left" | "right";
  trigger?: "click" | "hover";
};
function Pop({children, content, direction = "bottom", trigger = "click"}: PopProps) {
  if (trigger === "hover") {
    return (
      <RTooltip.Provider delayDuration={100}>
        <RTooltip.Root>
          <RTooltip.Trigger asChild>
            <div>{children}</div>
          </RTooltip.Trigger>
          <RTooltip.Portal>
            <PopoverContentSt>
              <RTooltip.Content
                className="PopoverContent hoverable"
                side={direction}
                sideOffset={5}
              >
                {content}
              </RTooltip.Content>
            </PopoverContentSt>
          </RTooltip.Portal>
        </RTooltip.Root>
      </RTooltip.Provider>
    );
  }
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div className="cursor-pointer">{children}</div>
      </Popover.Trigger>
      <Popover.Portal>
        <PopoverContentSt>
          <Popover.Content side={direction} className="PopoverContent" sideOffset={5}>
            {content || <></>}
          </Popover.Content>
        </PopoverContentSt>
      </Popover.Portal>
    </Popover.Root>
  );
}
Pop.Tooltip = Tooltip;
export default Pop;
