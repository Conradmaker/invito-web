import styled, {css} from "styled-components";
import {InputProps} from ".";
import * as RSlider from "@radix-ui/react-slider";
import * as RSelect from "@radix-ui/react-select";
import * as RSwitch from "@radix-ui/react-switch";
import {SwitchProps} from "./Switch";
import {SliderProps} from "./Slider";

export const InputBox = styled.div<InputProps & {$focused: boolean; $error: boolean}>`
  transition: all 0.1s ease-in-out;
  position: relative;
  display: flex;
  border-radius: 4px;
  box-shadow: 0 0 0 1px ${({theme}) => theme.colors.neutral[200]} inset;
  align-items: center;
  .prefix {
    color: ${({theme}) => theme.colors.neutral[500]};
    white-space: nowrap;
  }
  ${({$focused}) => {
    if ($focused)
      return css`
        box-shadow: 0 0 0 0.5px ${({theme}) => theme.colors.primary[300]} inset,
          0 0 0 3px ${({theme}) => theme.colors.primary[100]};
      `;
  }}
  ${({error}) =>
    error &&
    css`
      box-shadow: 0 0 0 1px ${({theme}) => theme.colors.danger[300]} inset;
    `}
  ${({disabled}) =>
    disabled &&
    css`
      background-color: ${({theme}) => theme.colors.neutral[100]};
    `}
  & > input {
    background-color: transparent;
    outline: none;
    width: 100%;
    border: none;
    &::placeholder {
      color: ${({theme}) => theme.colors.neutral[200]};
    }
  }
  ${({size}) => {
    switch (size) {
      default:
      case "sm":
        return css`
          input {
            padding: 6px 12px;
            font-size: 12px;
          }
          .prefix {
            padding: 0px 6px;
            font-size: 12px;
          }
          .prefix + input {
            padding-left: 0px;
          }
          svg {
            width: 16px;
            height: 16px;
          }
        `;
      case "md":
        return css`
          input {
            padding: 8px 12px;
            font-size: 14px;
          }
          .prefix {
            padding: 0px 8px;
            font-size: 12px;
          }
          .prefix + input {
            padding-left: 0px;
          }
          svg {
            width: 20px;
            height: 20px;
          }
        `;
      case "lg":
        return css`
          input {
            padding: 10px 12px;
            font-size: 16px;
          }
          .prefix {
            padding: 0px 10px;
            font-size: 12px;
          }
          .prefix + input {
            padding-left: 0px;
          }
          svg {
            width: 24px;
            height: 24px;
          }
        `;
    }
  }}
`;

export const SwitchBox = styled(RSwitch.Root)<SwitchProps>`
  background-color: ${({theme}) => theme.colors.primary[200]};
  border-radius: 9999px;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &[data-state="checked"] {
    background-color: ${({theme}) => theme.colors.primary[400]};
  }
  .radix-switch-thumb {
    display: block;
    background-color: white;
    border-radius: 9999px;
    transition: transform 150ms;
    will-change: transform;
  }
  ${({size}) => {
    switch (size) {
      default:
      case "sm":
        return css`
          width: 40px;
          height: 20px;
          .radix-switch-thumb {
            width: 12px;
            height: 12px;
            transform: translateX(4px);
          }
          .radix-switch-thumb[data-state="checked"] {
            transform: translateX(24px);
          }
        `;
      case "md":
        return css`
          width: 46px;
          height: 22px;
          .radix-switch-thumb {
            width: 14px;
            height: 14px;
            transform: translateX(5px);
          }
          .radix-switch-thumb[data-state="checked"] {
            transform: translateX(27px);
          }
        `;
      case "lg":
        return css`
          width: 52px;
          height: 24px;
          .radix-switch-thumb {
            width: 16px;
            height: 16px;
            transform: translateX(6px);
          }
          .radix-switch-thumb[data-state="checked"] {
            transform: translateX(30px);
          }
        `;
    }
  }}
`;

export const SliderBox = styled(RSlider.Root)<SliderProps>`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;

  .rx-slider-track {
    background-color: ${({theme}) => theme.colors.primary[100]};
    position: relative;
    flex-grow: 1;
    border-radius: 9999px;
    height: 3px;
    cursor: pointer;
  }
  .rx-slider-range {
    position: absolute;
    background-color: ${({theme}) => theme.colors.primary[300]};
    border-radius: 9999px;
    height: 100%;
  }
  .rx-slider-thumb {
    cursor: pointer;
    outline: none;
    transition: all 0.15s;
    display: block;
    background-color: ${({theme}) => theme.colors.neutral[100]};
    box-shadow: 0 0 0 1.5px ${({theme}) => theme.colors.primary[300]} inset,
      0 2px 2px ${({theme}) => theme.colors.primary[200]};
    border-radius: 50px;
    &:hover {
      background-color: ${({theme}) => theme.colors.primary[100]};
      box-shadow: 0 2px 5px ${({theme}) => theme.colors.primary[300]};
    }

    &:active {
      background-color: ${({theme}) => theme.colors.primary[100]};
    }
  }

  ${({size, shape}) => {
    switch (size) {
      default:
      case "sm":
        return css`
          height: 20px;
          width: 200px;
          .rx-slider-track {
            height: 3px;
          }
          .rx-slider-thumb {
            width: ${shape === "bar" ? 6 : 14}px;
            height: 14px;

            &:active {
              width: 8px;
              height: 8px;
              box-shadow: 0 0 0 5px ${({theme}) => theme.colors.primary[400]};
            }
          }
        `;
      case "md":
        return css`
          width: 250px;
          height: 22px;
          .rx-slider-track {
            height: 4px;
          }
          .rx-slider-thumb {
            width: ${shape === "bar" ? 8 : 16}px;
            height: 16px;

            &:active {
              width: 12px;
              height: 12px;
              box-shadow: 0 0 0 5px ${({theme}) => theme.colors.primary[400]};
            }
          }
        `;
      case "lg":
        return css`
          width: 300px;
          height: 24px;
          .rx-slider-track {
            height: 5px;
          }
          .rx-slider-thumb {
            width: ${shape === "bar" ? 10 : 22}px;
            height: 22px;

            &:active {
              width: 16px;
              height: 16px;
              box-shadow: 0 0 0 5px ${({theme}) => theme.colors.primary[400]};
            }
          }
        `;
    }
  }}
`;

export const RSelectSt = styled.div<{
  $focused: boolean;
  $error: boolean;
  size: "sm" | "md" | "lg";
}>`
  display: flex;
  .select-trigger {
    flex: 1;
    transition: all 0.1s ease-in-out;
    position: relative;
    display: flex;
    border-radius: 4px;
    box-shadow: 0 0 0 1px ${({theme}) => theme.colors.neutral[200]} inset;
    align-items: center;
    display: flex;
    justify-content: space-between;
    outline: none;
    .select-icon {
      transition: all 0.2s ease-in-out;
      color: ${({theme}) => theme.colors.neutral[600]};
    }
    &:hover {
      background-color: ${({theme}) => theme.colors.neutral[100]};
    }
    &[data-disabled] {
      background-color: ${({theme}) => theme.colors.neutral[100]};
      color: ${({theme}) => theme.colors.neutral[500]};
      .select-icon {
        color: ${({theme}) => theme.colors.neutral[500]};
      }
    }
    &[data-placeholder] {
      color: ${({theme}) => theme.colors.neutral[200]};
    }
    &[data-state="open"] {
      .select-icon {
        transform: rotate(180deg);
      }
    }
    &[data-state="open"],
    &:focus {
      box-shadow: 0 0 0 0.5px ${({theme}) => theme.colors.primary[300]} inset,
        0 0 0 3px ${({theme}) => theme.colors.primary[100]};
    }
    ${({$focused}) =>
      $focused &&
      css`
        box-shadow: 0 0 0 0.5px ${({theme}) => theme.colors.primary[300]} inset,
          0 0 0 3px ${({theme}) => theme.colors.primary[100]};
      `}
    ${({size}) => {
      switch (size) {
        default:
        case "sm":
          return css`
            padding: 6px 12px;
            font-size: 12px;
            .prefix {
              padding: 0px 6px;
            }
            .prefix + input {
              padding-left: 0px;
            }
            svg {
              width: 18px;
              height: 18px;
            }
          `;
        case "md":
          return css`
            padding: 8px 12px;
            font-size: 14px;
            .prefix {
              padding: 0px 8px;
            }
            .prefix + input {
              padding-left: 0px;
            }
            svg {
              width: 20px;
              height: 20px;
            }
          `;
        case "lg":
          return css`
            padding: 10px 12px;
            font-size: 16px;
            .prefix {
              padding: 0px 10px;
            }
            .prefix + input {
              padding-left: 0px;
            }
            svg {
              width: 24px;
              height: 24px;
            }
          `;
      }
    }}
  }
`;

export const SelectContentSt = styled(RSelect.Content)`
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  background-color: #fff;
  .select-viewport {
    padding: 5px;
    .select-label {
      padding: 2px 25px;
      font-size: 11px;
      line-height: 25px;
      color: ${({theme}) => theme.colors.neutral[400]};
    }
    .select-item {
      font-size: 14px;
      line-height: 1;
      color: ${({theme}) => theme.colors.neutral[700]};
      border-radius: 3px;
      display: flex;
      align-items: center;
      height: 28px;
      padding: 0 35px 0 25px;
      position: relative;
      user-select: none;
      &[data-disabled] {
        color: ${({theme}) => theme.colors.neutral[300]};
        background-color: ${({theme}) => theme.colors.neutral[100]};
        pointer-events: none;
      }
      &[data-highlighted] {
        outline: none;
        cursor: pointer;
        color: ${({theme}) => theme.colors.neutral[700]};
        background-color: ${({theme}) => theme.colors.neutral[100]};
      }
      &[data-state="checked"] {
        outline: none;
        cursor: pointer;
        background-color: ${({theme}) => theme.colors.primary[100]};
        color: ${({theme}) => theme.colors.primary[500]};
      }
      .select-item-indicator {
        position: absolute;
        left: 0;
        width: 25px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
      }
    }
    .select-separator {
      height: 1px;
      background-color: ${({theme}) => theme.colors.primary[100]};
      margin: 5px;
    }
  }
`;