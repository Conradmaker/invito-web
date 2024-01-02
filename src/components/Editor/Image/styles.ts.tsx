import styled, {css} from "styled-components";
import {ImageConfigProps} from ".";

type ImageStyleProps = {
  $hovered: boolean;
  $selected: boolean;
} & ImageConfigProps;
export const ImageSt = styled.div<ImageStyleProps>`
  position: relative;
  ${(props) => css`
    width: ${props.$width.value}${props.$width.unit};
    height: ${props.$height.value}${props.$height.unit};
  `};
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-style: ${({$selected}) => ($selected ? "solid" : "dashed")};
  border-color: ${({$selected, $hovered, theme}) =>
    $selected
      ? theme.colors.primary[400]
      : $hovered
      ? theme.colors.primary[300]
      : "transparent"};
  .img-positioner {
    border-radius: ${({$radius}) => `${$radius}px`};
    flex: 1;
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: ${({$fit}) => $fit};
    }
  }
  .caption {
    width: 100%;
    white-space: nowrap;
    text-align: ${({$caption}) => $caption.placement?.split("-")[1] || "right"};
  }
`;
