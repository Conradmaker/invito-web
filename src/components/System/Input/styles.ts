import styled, {css} from "styled-components";
import {InputProps} from ".";
import * as RSlider from "@radix-ui/react-slider";
import * as RSelect from "@radix-ui/react-select";
import * as RSwitch from "@radix-ui/react-switch";
import * as RToggle from "@radix-ui/react-toggle";
import * as RToggleGroup from "@radix-ui/react-toggle-group";
import {SwitchProps} from "./Switch";
import {SliderProps} from "./Slider";
import {LabelProps} from "./Label";
import {ToggleProps} from "./Toggle";

type InputBoxProps = InputProps & {
  $focused: boolean;
  $error: boolean;
  $width?: number;
  $bordered: boolean;
  $textAlign?: string;
  $block?: boolean;
};
export const InputBox = styled.div<InputBoxProps>`
  transition: all 0.1s ease-in-out;
  position: relative;
  display: flex;
  border-radius: 4px;
  box-shadow: 0 0 0 1px ${({theme}) => theme.colors.neutral[200]} inset;
  align-items: center;
  white-space: nowrap;
  .prefix {
    color: ${({theme}) => theme.colors.neutral[500]};
    white-space: nowrap;
  }
  ${({$width}) =>
    $width &&
    css`
      width: ${$width}px;
    `}
  ${({$block}) =>
    $block &&
    css`
      flex: 1;
      width: 100%;
    `}
  ${({$focused, theme}) =>
    $focused &&
    css`
      box-shadow: 0 0 0 0.8px ${theme.colors.primary[300]} inset,
        0 0 0 3px ${theme.colors.primary[100]};
    `}
  ${({error, theme}) =>
    error &&
    css`
      box-shadow: 0 0 0 1px ${theme.colors.danger[300]} inset;
    `}

  ${({$bordered, theme}) =>
    !$bordered &&
    css`
      box-shadow: 0 0 0 0px ${theme.colors.danger[300]} inset;
    `}
  ${({disabled, theme}) =>
    disabled &&
    css`
      background-color: ${theme.colors.neutral[100]};
    `}

  & > input {
    background-color: transparent;
    outline: none;
    width: 100%;
    border: none;
    &::placeholder {
      color: ${({theme}) => theme.colors.neutral[200]};
    }
    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  ${({$textAlign}) =>
    $textAlign &&
    css`
      & > input {
        text-align: ${$textAlign || "left"};
      }
    `}
  ${({size}) => {
    switch (size) {
      case "xs":
        return css`
          input {
            padding: 3.5px 10px;
            font-size: 11px;
          }
          .prefix {
            padding: 0px 5px;
            font-size: 11px;
          }
          .prefix + input {
            padding-left: 0px;
          }
          svg {
            width: 14px;
            height: 14px;
          }
        `;
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
      case "xs":
        return css`
          width: 34px;
          height: 16px;
          .radix-switch-thumb {
            width: 10px;
            height: 10px;
            transform: translateX(3px);
          }
          .radix-switch-thumb[data-state="checked"] {
            transform: translateX(21px);
          }
        `;
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
    position: relative;
    .rx-slider-value {
      display: none;
      top: -25px;
      left: 50%;
      font-size: 12px;
      position: absolute;
      padding: 0px 4px;
      border-radius: 4px;
      transform: translateX(-50%);
      border: 1px solid ${({theme}) => theme.colors.primary[300]};
      background-color: ${({theme}) => theme.colors.neutral[0]};
      color: ${({theme}) => theme.colors.primary[400]};
    }
    &:hover {
      background-color: ${({theme}) => theme.colors.primary[100]};
      box-shadow: 0 2px 5px ${({theme}) => theme.colors.primary[300]};
      .rx-slider-value {
        display: flex;
      }
    }

    &:active {
      background-color: ${({theme}) => theme.colors.primary[100]};
      .rx-slider-thumb .rx-slider-value {
        top: -25px;
      }
    }
  }

  ${({size, shape}) => {
    switch (size) {
      default:
      case "sm":
        return css`
          height: 20px;
          min-width: 150px;
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
          min-width: 200px;
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
          min-width: 200px;
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
  ${({block}) =>
    block &&
    css`
      width: 100%;
    `}
`;

type RSelectProps = {
  $focused: boolean;
  $error: boolean;
  $block: boolean;
  $size: "xs" | "sm" | "md" | "lg";
  $ghost: boolean;
};
export const RSelectSt = styled.div<RSelectProps>`
  display: flex;
  ${({$block}) =>
    $block &&
    css`
      width: 100%;
      flex: 1;
    `}
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

    ${({$block}) =>
      $block &&
      css`
        width: 100%;
        flex: 1;
      `}

    ${({$size}) => {
      switch ($size) {
        case "xs":
          return css`
            padding: 3.5px 10px;
            font-size: 11px;
            .prefix {
              padding: 0px 5px;
            }
            .prefix + input {
              padding-left: 0px;
            }
            svg {
              width: 14px;
              height: 14px;
            }
          `;
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
    ${({$ghost}) =>
      $ghost &&
      css`
        box-shadow: none;
        .select-icon {
          display: none;
        }
      `}
  }
`;

export const SelectContentSt = styled(RSelect.Content)`
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0px 10px 32px -10px rgba(22, 23, 24, 0.3),
    0px 10px 16px -15px rgba(22, 23, 24, 0.15);
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

type ToggleStyleProps = {
  size: ToggleProps["size"];
  $block: ToggleProps["block"];
};
export const ToggleBox = styled(RToggle.Root)<ToggleStyleProps>`
  background-color: ${({theme}) => theme.colors.neutral[0]};
  color: ${({theme}) => theme.colors.neutral[600]};
  border-radius: 4px;
  display: flex;
  font-size: 18px;
  line-height: 1;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0px 1px ${({theme}) => theme.colors.neutral[500]} inset;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme}) => theme.colors.neutral[100]};
  }
  &[data-state="on"] {
    background-color: ${({theme}) => theme.colors.primary[300]};
    color: ${({theme}) => theme.colors.neutral[0]};
    &:hover {
      background-color: ${({theme}) => theme.colors.primary[400]};
    }
  }
  &:focus {
    box-shadow: 0 0 0 2px ${({theme}) => theme.colors.primary[200]};
  }
  ${({size}) => {
    switch (size) {
      case "xs":
        return css`
          padding: 4px;
          /* padding: 0 12px; */
          font-size: 11px;
          svg {
            width: 15.5px;
            height: 15.5px;
          }
          .toggle-text {
            margin-left: 1px;
            margin-right: 4px;
          }
        `;
      default:
      case "sm":
        return css`
          padding: 6px;
          /* padding: 0 12px; */
          font-size: 12px;
          svg {
            width: 18px;
            height: 18px;
          }
          .toggle-text {
            margin-left: 2px;
            margin-right: 4px;
          }
        `;
      case "md":
        return css`
          padding: 8.5px;
          font-size: 14px;
          svg {
            width: 20px;
            height: 20px;
          }
          .toggle-text {
            margin-left: 2px;
            margin-right: 5px;
          }
        `;
      case "lg":
        return css`
          padding: 10px;
          font-size: 16px;
          svg {
            width: 24px;
            height: 24px;
          }
          .toggle-text {
            margin-left: 2px;
            margin-right: 6px;
          }
        `;
    }
  }}
`;

export const ToggleGroupBox = styled(RToggleGroup.Root)<ToggleStyleProps>`
  display: inline-flex;
  background-color: ${({theme}) => theme.colors.neutral[200]};
  border-radius: 4px;
  box-shadow: 0 0px 1px ${({theme}) => theme.colors.neutral[500]};
  ${({$block}) =>
    $block &&
    css`
      flex: 1;
      display: flex;
      width: 100%;
      .toggle-group-item {
        flex: 1;
        gap: 2px;
      }
    `}
  .toggle-group-item {
    background-color: ${({theme}) => theme.colors.neutral[0]};
    color: ${({theme}) => theme.colors.neutral[600]};
    display: flex;
    line-height: 1;
    align-items: center;
    justify-content: center;
    margin-left: 1px;
    transition: all 0.2s ease-in-out;
    &:first-child {
      margin-left: 0;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &:hover {
      background-color: ${({theme}) => theme.colors.neutral[100]};
    }
    &[data-state="on"] {
      background-color: ${({theme}) => theme.colors.primary[300]};
      color: ${({theme}) => theme.colors.neutral[0]};
      &:hover {
        background-color: ${({theme}) => theme.colors.primary[400]};
      }
    }
    &:focus {
      position: relative;
      box-shadow: 0 0 0 2px ${({theme}) => theme.colors.primary[200]};
    }
    ${({size}) => {
      switch (size) {
        case "xs":
          return css`
            padding: 4.5px;
            font-size: 11px;
            svg {
              width: 14.5px;
              height: 14.5px;
            }
            .toggle-text {
              margin-left: 2px;
              margin-right: 3px;
            }
          `;
        default:
        case "sm":
          return css`
            padding: 7px;
            font-size: 12px;
            svg {
              width: 16px;
              height: 16px;
            }
            .toggle-text {
              margin-left: 6px;
              margin-right: 4px;
            }
          `;
        case "md":
          return css`
            padding: 9.5px;
            font-size: 14px;
            svg {
              width: 18px;
              height: 18px;
            }
            .toggle-text {
              margin-left: 2px;
              margin-right: 5px;
            }
          `;
        case "lg":
          return css`
            padding: 11px;
            font-size: 16px;
            svg {
              width: 22px;
              height: 22px;
            }
            .toggle-text {
              margin-left: 2px;
              margin-right: 6px;
            }
          `;
      }
    }}
  }
`;

export const LabelBox = styled.label<{$direction: LabelProps["direction"]}>`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 6px;
  & > .label {
    flex: 1;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
  }
  ${({$direction}) =>
    $direction === "horizontal" &&
    css`
      flex-direction: row;
      align-items: center;
      & > .label {
        display: flex;
        flex-direction: column;
      }
      & > div {
        flex: 1;
      }
    `}
`;

export const ColorPickerSt = styled.div`
  .rcp-root.rcp {
    background-color: ${({theme}) => theme.colors.neutral[0]};
    .rcp-fields {
      .rcp-field-input {
        color: ${({theme}) => theme.colors.neutral[700]};
        outline: none;
        border: 1px solid ${({theme}) => theme.colors.neutral[200]};
        &:focus {
          border: 1px solid ${({theme}) => theme.colors.primary[300]};
        }
      }
    }
  }
`;

export const ImgInputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  .preview {
    position: relative;
    padding-top: 60%;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
      position: absolute;
      top: 0;
      left: 0;
    }
    object-fit: cover;
    border-radius: 4px;
  }
  .btn-box {
    width: 100%;
    display: flex;
    gap: 4px;
  }
`;
