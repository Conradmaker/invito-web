import styled, {css} from "styled-components";
import {ContainerConfigType} from ".";

type ContainerStProps = {$selected: boolean; $hovered: boolean} & ContainerConfigType;
export const ContainerSt = styled.div<ContainerStProps>`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  ${(props) => css`
    width: ${props.width.value}${props.width.unit};
    height: ${props.height.value}${props.height.unit};
  `};
  & > div {
    height: 100%;
    width: 100%;
    border-width: 1px;
    border-style: ${({$selected}) => ($selected ? "solid" : "dashed")};
    border-color: ${({$selected, $hovered, theme}) =>
      $selected
        ? theme.colors.primary[400]
        : $hovered
        ? theme.colors.primary[300]
        : theme.colors.primary[100]};
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    ${(props) => css`
      padding-left: ${props.paddingLeft || 0}px;
      padding-right: ${props.paddingRight || 0}px;
      padding-top: ${props.paddingTop || 0}px;
      padding-bottom: ${props.paddingBottom || 0}px;
      flex-direction: ${props.direction || "row"};
      justify-content: ${props.direction === "row" ? props.justify : props.align};
      align-items: ${props.direction === "column" ? props.justify : props.align};
      gap: ${props.gap || 0}px;
    `}
    ${({background}) => {
      switch (background?.filter?.type) {
        case "grayscale":
          return css`
            backdrop-filter: grayscale(${background.filter.value}%)
              blur(${background.filter.blur || 0}px);
          `;
        case "sepia":
          return css`
            backdrop-filter: sepia(${background.filter.value}%)
              blur(${background.filter.blur || 0}px);
          `;
        case "invert":
          return css`
            backdrop-filter: invert(${background.filter.value}%)
              blur(${background.filter.blur || 0}px);
          `;
        case "contrast":
          return css`
            backdrop-filter: contrast(${background.filter.value}%)
              blur(${background.filter.blur || 0}px);
          `;
        default:
        case "none":
          return css`
            backdrop-filter: blur(${background.filter.blur || 0}px);
          `;
      }
    }}
  }
  ${(props) => css`
    margin-left: ${props.marginLeft || 0}px;
    margin-right: ${props.marginRight || 0}px;
    margin-top: ${props.marginTop || 0}px;
    margin-bottom: ${props.marginBottom || 0}px;
  `}
  ${({background}) => {
    switch (background?.type) {
      case "color":
        return css`
          background-color: ${background.color};
        `;
      case "image":
        return css`
          background-image: url(${background.src});
          background-size: cover;
          background-position: center;
        `;
      default:
      case "transparent":
        return css``;
    }
  }}
`;
