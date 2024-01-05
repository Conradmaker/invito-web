import styled, {css} from "styled-components";
import {TextProps} from ".";
import ContentEditable from "react-contenteditable";

export const TextSt = styled.span<TextProps>`
  position: relative;
  max-width: 100%;
  white-space: pre-wrap;
  ${(props) => css`
    & > p {
      max-width: 100%;
      font-size: ${props.$size}px;
      font-weight: ${props.$weight || 400};
      color: ${props.$color || "#000"};
      text-align: ${props.$align || "left"};
      font-family: ${props.$font}, "Wanted Sans Variable", "Wanted Sans", sans-serif;
      line-break: anywhere;
    }
  `}
  ${({$width}) =>
    $width.unit !== "auto" &&
    css`
      max-width: 100%;
      display: inline-block;
      width: ${$width.value}${$width.unit};
    `}
`;

export const TextContentEditBox = styled(ContentEditable)`
  box-shadow: 0 0px 0px 0.7px ${({theme}) => theme.colors.primary[400]} inset;
  cursor: text;
  width: 100%;
  height: 100%;
  outline: none;
`;
