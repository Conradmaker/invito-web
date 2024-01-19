import styled, {css} from "styled-components";
import {PillProps} from ".";

type PillStProps = {
  $size?: PillProps["size"];
  $color?: PillProps["color"];
  onClick?: PillProps["onClick"];
};
export const PillSt = styled.div<PillStProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;

  border: 1px solid ${({theme}) => theme.colors.neutral[300]};
  color: ${({theme}) => theme.colors.neutral[700]};
  background-color: ${({theme}) => theme.colors.neutral[100]};

  ${({$color, theme}) => {
    switch ($color) {
      default:
      case "gray":
        return css``;
      case "white":
        return css`
          border-color: ${theme.colors.neutral[500]};
          color: ${theme.colors.neutral[700]};
          background-color: ${theme.colors.neutral[0]};
        `;
      case "blue":
        return css`
          border-color: ${theme.colors.primary[200]};
          color: ${theme.colors.primary[100]};
          background-color: ${theme.colors.primary[400]};
        `;
      case "light-blue":
        return css`
          border-color: ${theme.colors.primary[300]};
          color: ${theme.colors.primary[400]};
          background-color: ${theme.colors.primary[100]};
        `;
      case "red":
        return css`
          border-color: ${theme.colors.danger[300]};
          color: ${theme.colors.danger[100]};
          background-color: ${theme.colors.danger[300]};
        `;
      case "light-red":
        return css`
          border-color: ${theme.colors.danger[300]};
          color: ${theme.colors.danger[400]};
          background-color: ${theme.colors.danger[100]};
        `;
      case "green":
        return css`
          border-color: #2ecc71;
          color: #fff;
          background-color: #2ecc71;
        `;
    }
  }}

  ${({$size}) => {
    switch ($size) {
      default:
      case "sm":
        return css`
          border-radius: 4px;
          font-size: 10px;
          padding: 2px 6px;
        `;
      case "md":
        return css`
          font-size: 11px;
          border-radius: 6px;
          padding: 3px 10px;
        `;
      case "lg":
        return css`
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 12px;
        `;
    }
  }}
  ${({onClick}) =>
    onClick &&
    css`
      cursor: pointer;
    `}
`;
