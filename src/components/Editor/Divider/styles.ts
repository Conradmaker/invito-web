import styled, {css} from "styled-components";
import {DividerConfigProps} from ".";

type DividerStyleProps = {
  $hovered: boolean;
  $selected: boolean;
} & DividerConfigProps;
export const DividerSt = styled.div<DividerStyleProps>`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  hr {
    margin-top: ${(props) => props.$marginTop}px;
    margin-bottom: ${(props) => props.$marginBottom}px;
    border-width: ${(props) => props.$stroke}px;
    border-color: ${(props) => props.$color};
    width: ${(props) => props.$width}%;
  }
  border-width: 1px;
  border-style: ${({$selected}) => ($selected ? "solid" : "dashed")};
  border-color: ${({$selected, $hovered, theme}) =>
    $selected
      ? theme.colors.primary[400]
      : $hovered
      ? theme.colors.primary[300]
      : "transparent"};
`;
