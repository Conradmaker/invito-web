import styled, {css} from "styled-components";
import {TextProps} from ".";

export const TextSt = styled.span<TextProps>`
  position: relative;
  ${(props) => css`
    font-size: ${props.size}px;
    font-weight: ${props.weight || 400};
    color: ${props.color || "#000"};
    text-align: ${props.align || "left"};
    font-family: ${props.font || "sans-serif"};
  `}
`;
