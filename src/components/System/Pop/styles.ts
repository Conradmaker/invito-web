import styled from "styled-components";
import * as RTooltip from "@radix-ui/react-tooltip";

export const TooltipContentSt = styled(RTooltip.Content)`
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 13px;
  line-height: 1;
  z-index: 9999;
  color: ${({theme}) => theme.colors.neutral[100]};
  background-color: ${({theme}) => theme.colors.neutral[1000]};
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  &[data-state="delayed-open"][data-side="top"] {
    animation-name: slideUpAndFade;
  }
  &[data-state="delayed-open"][data-side="right"] {
    animation-name: slideRightAndFade;
  }
  &[data-state="delayed-open"][data-side="bottom"] {
    animation-name: slideDownAndFade;
  }
  &[data-state="delayed-open"][data-side="left"] {
    animation-name: slideLeftAndFade;
  }
  .tooltip-arrow {
    fill: white;
  }
  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-8px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(8px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const PopoverContentSt = styled.div`
  .PopoverContent {
    border-radius: 4px;
    width: var(--radix-popover-trigger-width);
    max-height: var(--radix-popover-content-available-height);

    background-color: ${({theme}) => theme.colors.neutral[0]};
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
    .tooltip-arrow {
      fill: white;
    }
    &:focus {
      box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
        hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    }
    &[data-state="open"][data-side="top"],
    &[data-state="delayed-open"][data-side="top"] {
      animation-name: slideDownAndFade;
    }
    &[data-state="open"][data-side="right"],
    &[data-state="delayed-open"][data-side="right"] {
      animation-name: slideLeftAndFade;
    }
    &[data-state="open"][data-side="bottom"],
    &[data-state="delayed-open"][data-side="bottom"] {
      animation-name: slideUpAndFade;
    }
    &[data-state="open"][data-side="left"],
    &[data-state="delayed-open"][data-side="left"] {
      animation-name: slideRightAndFade;
    }
  }
  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-8px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(8px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
