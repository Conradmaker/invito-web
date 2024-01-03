import styled, {css} from "styled-components";
import {ContainerConfigType} from ".";

type ContainerStProps = {
  $selected: boolean;
  $hovered: boolean;
  $selectedRoot: boolean;
  $border: boolean;
} & ContainerConfigType;
export const ContainerSt = styled.div<ContainerStProps>`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  ${(props) => css`
    width: ${props.$width.value}${props.$width.unit};
    height: ${props.$height.value}${props.$height.unit};
  `};

  ${({$selectedRoot, $selected}) => {
    return css`
      z-index: ${$selectedRoot ? 999 : $selected ? 2 : 1};
    `;
  }}

  .handle-layer {
    position: absolute;
    top: -50vh;
    left: -50vw;
    bottom: -50vh;
    right: -50vw;
    background-color: ${({theme}) => theme.colors.primary[400]};
    display: none;
    opacity: 0.5;
    &.clicked {
      z-index: 9999;
      display: block;
    }
  }
  .handle {
    z-index: 99;
    display: flex;
    position: absolute;
    background-color: ${({theme}) => theme.colors.primary[400]};
    border: 1px solid ${({theme}) => theme.colors.primary[400]};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1px;
    &.top,
    &.bottom {
      cursor: row-resize;
      left: 50%;
      transform: translateX(-50%);
      width: 24px;
      height: 8px;
      &::after,
      &::before {
        background-color: ${({theme}) => theme.colors.neutral[300]};
        content: "";
        width: 40%;
        height: 1px;
      }
    }
    &.top {
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      top: -8px;
      padding-top: 1px;
    }
    &.bottom {
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
      bottom: -8px;
      padding-bottom: 1px;
    }
    &.left,
    &.right {
      cursor: col-resize;
      top: 50%;
      transform: translateY(-50%);
      width: 8px;
      height: 24px;
      flex-direction: row;
      &::after,
      &::before {
        background-color: ${({theme}) => theme.colors.neutral[300]};
        content: "";
        width: 1px;
        height: 40%;
      }
    }
    &.left {
      border-bottom-left-radius: 3px;
      border-top-left-radius: 3px;
      left: -8px;
      padding-top: 1px;
    }
    &.right {
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
      right: -8px;
      padding-bottom: 1px;
    }
  }
  & > .content {
    position: relative;
    height: 100%;
    width: 100%;
    border-width: 1px;
    border-style: ${({$selected}) => ($selected ? "solid" : "dashed")};
    border-color: ${({$selected, $hovered, $border, theme}) =>
      $selected
        ? theme.colors.primary[400]
        : $hovered
        ? theme.colors.primary[300]
        : $border
        ? theme.colors.primary[100]
        : "transparent"};

    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    ${(props) => css`
      padding-left: ${props.$paddingLeft || 0}px;
      padding-right: ${props.$paddingRight || 0}px;
      padding-top: ${props.$paddingTop || 0}px;
      padding-bottom: ${props.$paddingBottom || 0}px;
      flex-direction: ${props.$direction || "row"};
      justify-content: ${props.$direction === "row" ? props.$justify : props.$align};
      align-items: ${props.$direction === "column" ? props.$justify : props.$align};
      gap: ${props.$gap || 0}px;
    `}
    ${({$background}) => {
      switch ($background?.filter?.type) {
        case "grayscale":
          return css`
            backdrop-filter: grayscale(${$background.filter.value}%)
              blur(${$background.filter.blur || 0}px);
          `;
        case "sepia":
          return css`
            backdrop-filter: sepia(${$background.filter.value}%)
              blur(${$background.filter.blur || 0}px);
          `;
        case "invert":
          return css`
            backdrop-filter: invert(${$background.filter.value}%)
              blur(${$background.filter.blur || 0}px);
          `;
        case "contrast":
          return css`
            backdrop-filter: contrast(${$background.filter.value}%)
              blur(${$background.filter.blur || 0}px);
          `;
        default:
        case "none":
          return css`
            backdrop-filter: blur(${$background.filter.blur || 0}px);
          `;
      }
    }}
  }
  ${(props) => css`
    margin-left: ${props.$marginLeft || 0}px;
    margin-right: ${props.$marginRight || 0}px;
    margin-top: ${props.$marginTop || 0}px;
    margin-bottom: ${props.$marginBottom || 0}px;
  `}
  ${({$background}) => {
    switch ($background?.type) {
      case "color":
        return css`
          background-color: ${$background.color};
        `;
      case "image":
        return css`
          background-image: url(${$background.src});
          background-size: cover;
          background-position: center;
        `;
      default:
      case "transparent":
        return css``;
    }
  }}
`;
