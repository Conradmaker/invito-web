import styled, {css} from "styled-components";
import {IconProps} from "./Loading";

export const IconSt = styled.span<IconProps>`
  ${({theme, color}) => {
    switch (color) {
      default:
      case "primary":
        return css`
          color: ${theme.colors.neutral[900]};
        `;
      case "secondary":
        return css`
          color: ${theme.colors.neutral[500]};
        `;
      case "alternate":
        return css`
          color: ${theme.colors.neutral[0]};
        `;
      case "highlight":
        return css`
          color: ${theme.colors.primary[300]};
        `;
    }
  }}
`;
