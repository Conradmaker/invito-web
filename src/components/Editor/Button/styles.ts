import styled, {css} from "styled-components";
import {ButtonProps} from ".";

type ButtonStyleProps = {
  $hovered: boolean;
  $selected: boolean;
} & ButtonProps;
export const ButtonStyle = styled.button<ButtonStyleProps>`
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 32px;
  text-align: center;
  transition: color, background-color, border-radius 0.25s ease-in-out;
  line-height: 1.5;
  position: relative;
  border-width: 1px;
  border-style: ${({$selected, $hovered}) =>
    $selected ? "solid" : $hovered ? "dashed" : "solid"};
  border-color: ${({$selected, $hovered, theme, color}) =>
    $selected
      ? theme.colors.primary[400]
      : $hovered
      ? theme.colors.primary[300]
      : color.background};
  &:disabled {
    background-color: #ccc;
    border-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }

  ${(props) => css`
    background-color: ${props.color.background};
    color: ${props.color.text};
  `}
  ${({block}) =>
    block &&
    css`
      display: block;
      width: 100%;
    `}

  ${({shape}) =>
    shape === "round" &&
    css`
      border-radius: 50px;
    `}


  ${({size}) => {
    switch (size) {
      case "xs":
        return css`
          padding: 6.5px 10px;
          font-size: 10.5px;
          line-height: 1;
          svg {
            width: 10.5px;
            height: 10.5px;
          }
        `;
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
`;
