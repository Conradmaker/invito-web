import styled, {css} from "styled-components";
import {BodyProps, HeadingProps, TypoProps} from ".";

const TypoSt = styled.span<{
  color?: TypoProps["color"];
  $mt?: TypoProps["mt"];
  $mb?: TypoProps["mb"];
  $align?: TypoProps["align"];
}>`
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
      case "danger":
        return css`
          color: ${theme.colors.danger[300]};
        `;
    }
  }}
  ${({$align}) => css`
    text-align: ${$align};
  `}
  margin-top: ${({$mt}) => $mt}px;
  margin-bottom: ${({$mb}) => $mb}px;
`;
export const HeadingTypo = styled(TypoSt)<{$level: HeadingProps["level"]}>`
  font-weight: 700;
  ${({$level}) => {
    switch ($level) {
      case 1:
        return css`
          font-size: 38px;
          line-height: 46px;
        `;
      case 2:
        return css`
          font-size: 30px;
          line-height: 40px;
        `;
      case 3:
        return css`
          font-size: 24px;
          line-height: 32px;
        `;
      case 4:
        return css`
          font-size: 20px;
          line-height: 28px;
        `;
      case 5:
        return css`
          font-size: 16px;
          line-height: 24px;
        `;
    }
  }}
`;
export const BodyTypo = styled(TypoSt)<{
  $weight?: BodyProps["weight"];
}>`
  font-size: 14px;
  line-height: 22px;
  /* font-feature-settings: "ss03"; */
  ${({$weight}) => {
    switch ($weight) {
      case "regular":
        return css`
          font-weight: 400;
        `;
      case "medium":
        return css`
          font-weight: 600;
        `;
      case "strong":
        return css`
          font-weight: 800;
        `;
    }
  }}
`;
export const DescTypo = styled(TypoSt)`
  font-size: 12px;
  color: ${({theme}) => theme.colors.neutral[500]};
`;
