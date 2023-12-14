import styled, {css} from "styled-components";
import {ButtonProps, IconButtonProps} from ".";

export const ButtonBox = styled.button<
  ButtonProps & {$styleType: ButtonProps["type"]; $block?: ButtonProps["block"]}
>`
  border-radius: 4px;
  font-weight: 400;
  font-size: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  display: block;
  align-items: center;
  gap: 8px;
  display: inline-flex;
  white-space: nowrap;
  ${({$styleType, theme}) => {
    switch ($styleType) {
      default:
      case "primary":
        return css`
          background-color: ${theme.colors.primary[400]};
          color: ${theme.colors.neutral[0]};
          svg {
            stroke: ${theme.colors.neutral[0]};
          }
          &:hover {
            background-color: ${theme.colors.primary[300]};
          }
          &:active {
            background-color: ${theme.colors.primary[500]};
          }
        `;
      case "secondary":
        return css`
          background-color: ${theme.colors.primary[100]};
          color: ${theme.colors.primary[300]};
          svg {
            stroke: ${theme.colors.primary[300]};
          }
          &:hover {
            background-color: ${theme.colors.primary[200]};
          }
          &:active {
            background-color: ${theme.colors.primary[100]};
            color: ${theme.colors.primary[400]};
          }
        `;
      case "tertiary":
        return css`
          background-color: ${theme.colors.neutral[0]};
          color: ${theme.colors.neutral[900]};
          box-shadow: 0 0 0 1px ${theme.colors.neutral[200]} inset;
          svg {
            stroke: ${theme.colors.neutral[900]};
          }
          &:hover {
            background-color: ${theme.colors.neutral[100]};
          }
          &:active {
            background-color: ${theme.colors.neutral[200]};
          }
        `;
      case "ghost":
        return css`
          background-color: transparent;
          color: ${theme.colors.neutral[900]};
          svg {
            stroke: ${theme.colors.neutral[900]};
          }
          &:hover {
            background-color: ${theme.colors.neutral[100]};
          }
          &:active {
            background-color: ${theme.colors.neutral[100]};
            opacity: 0.6;
          }
        `;
    }
  }}

  ${({size}) => {
    switch (size) {
      default:
      case "sm":
        return css`
          padding: 6px 16px;
          font-size: 12px;
          svg {
            width: 12px;
            height: 12px;
          }
        `;
      case "md":
        return css`
          padding: 8px 16px;
          font-size: 14px;
          svg {
            width: 14px;
            height: 14px;
          }
        `;
      case "lg":
        return css`
          padding: 10px 16px;
          font-size: 16px;
          svg {
            width: 16px;
            height: 16px;
          }
        `;
    }
  }}

  ${({disabled, theme}) =>
    disabled &&
    css`
      background-color: ${theme.colors.neutral[100]};
      color: ${theme.colors.neutral[300]};
      cursor: default;
      &:hover {
        background-color: ${theme.colors.neutral[100]};
        color: ${theme.colors.neutral[300]};
      }
      &:active {
        background-color: ${theme.colors.neutral[100]};
        color: ${theme.colors.neutral[300]};
      }
    `}
`;

export const IconButtonBox = styled(ButtonBox)`
  ${({size}) => {
    switch (size) {
      default:
      case "sm":
        return css`
          padding: 8px;
          svg {
            width: 14px;
            height: 14px;
          }
        `;
      case "md":
        return css`
          padding: 10.5px;
          svg {
            width: 16px;
            height: 16px;
          }
        `;
      case "lg":
        return css`
          padding: 13px;
          svg {
            width: 18px;
            height: 18px;
          }
        `;
    }
  }}
`;
