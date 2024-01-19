import styled from "styled-components";

export const DropdownContentContainer = styled.div`
  .DropdownMenuContent,
  .DropdownMenuSubContent {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 220px;
    background-color: ${({theme}) => theme.colors.neutral[0]};
    border-radius: 6px;
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px 0px, rgba(0, 0, 0, 0.1) 0px 1px 4px -1px;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
    &[data-side="top"] {
      animation-name: slideDownAndFade;
    }
    &[data-side="right"] {
      animation-name: slideLeftAndFade;
    }
    &[data-side="bottom"] {
      animation-name: slideUpAndFade;
    }
    &[data-side="left"] {
      animation-name: slideRightAndFade;
    }
  }
  .DropdownMenuItem,
  .DropdownMenuCheckboxItem,
  .DropdownMenuRadioItem,
  .DropdownMenuSubTrigger {
    font-size: 14px;
    color: ${({theme}) => theme.colors.neutral[900]};
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 6px 5px;
    position: relative;
    padding-left: 24px;
    user-select: none;
    outline: none;
    &[data-disabled] {
      color: ${({theme}) => theme.colors.neutral[200]};
      pointer-events: none;
    }
    &[data-highlighted] {
      background-color: ${({theme}) => theme.colors.primary[300]};
      color: ${({theme}) => theme.colors.primary[100]};
      .DropdownMenuItemIndicator {
        color: ${({theme}) => theme.colors.primary[100]};
      }
    }
  }
  .DropdownMenuSubTrigger[data-state="open"] {
    background-color: ${({theme}) => theme.colors.primary[100]};
    color: ${({theme}) => theme.colors.primary[500]};
  }

  .DropdownMenuLabel {
    padding: 2px 0;
    padding-left: 24px;
    font-size: 11px;
    color: ${({theme}) => theme.colors.neutral[400]};
  }

  .DropdownMenuSeparator {
    height: 1px;
    width: 90%;
    margin: 4px auto;
    background-color: ${({theme}) => theme.colors.neutral[200]};
    padding: 0px 4px;
  }

  .DropdownMenuItemIndicator {
    position: absolute;
    left: 0;
    width: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.colors.primary[500]};
    font-size: 16px;
  }

  .DropdownMenuArrow {
    fill: ${({theme}) => theme.colors.neutral[0]};
  }

  .RightSlot {
    margin-left: auto;
    padding-left: 20px;
    color: ${({theme}) => theme.colors.neutral[400]};
  }
  [data-highlighted] > .RightSlot {
    color: ${({theme}) => theme.colors.neutral[600]};
  }
  [data-disabled] .RightSlot {
    color: ${({theme}) => theme.colors.neutral[200]};
  }

  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
